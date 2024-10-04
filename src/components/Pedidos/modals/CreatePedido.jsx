import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { createPedido } from "../../../actions/pedido";
import { getProducts } from "../../../actions/product";

const CrearPedidoModal = ({
  open,
  onClose,
  providers,
  warehouses,
  products,
  createPedido,
  getProducts,
}) => {
  const [formData, setFormData] = useState({
    id_almacen: "",
    id_proveedor: "",
    listaProductos: [{ id_producto: "", cantidad: 0 }],
  });

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updatedListaProductos = formData.listaProductos.map((product, i) => {
      if (i === index) {
        return { ...product, [name]: value };
      }
      return product;
    });
    setFormData((prevState) => ({
      ...prevState,
      listaProductos: updatedListaProductos,
    }));
  };

  const addProduct = () => {
    setFormData((prevState) => ({
      ...prevState,
      listaProductos: [
        ...prevState.listaProductos,
        { id_producto: "", cantidad: 0 },
      ],
    }));
  };

  const removeProduct = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      listaProductos: prevState.listaProductos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPedido(formData);
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Pedido">
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-input">
          <select
            name="id_almacen"
            value={formData.id_almacen}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Almacén</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse?.tipo}
              </option>
            ))}
          </select>

          <select
            name="id_proveedor"
            value={formData.id_proveedor}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Proveedor</option>
            {providers.map((provider) => (
              <option key={provider.id} value={provider.id}>
                {provider.nombre}
              </option>
            ))}
          </select>

          <h4>Productos</h4>
          {formData.listaProductos.map((product, index) => (
            <div key={index} className="product-item">
              <select
                name="id_producto"
                value={product.id_producto}
                onChange={(e) => handleProductChange(index, e)}
              >
                <option value="">Seleccionar Producto</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="cantidad"
                value={product.cantidad}
                onChange={(e) => handleProductChange(index, e)}
                placeholder="Cantidad"
              />
              {index > 0 && (
                <button type="button" onClick={() => removeProduct(index)}>
                  Eliminar
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addProduct}>
            Agregar Producto
          </button>
        </div>
        <button type="submit" className="create-button">
          Crear Pedido
        </button>
      </form>
    </ProviderModal>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { createPedido, getProducts })(
  CrearPedidoModal
);
