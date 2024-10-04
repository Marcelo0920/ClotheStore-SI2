import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { updatePedido } from "../../../actions/pedido";
import { getProducts } from "../../../actions/product";

const PedidoEditModal = ({
  open,
  onClose,
  pedido,
  providers,
  warehouses,
  products,
  updatePedido,
  getProducts,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    id_almacen: "",
    id_proveedor: "",
    productos: [],
  });

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (pedido) {
      setFormData(pedido);
    }
  }, [pedido]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProducts = formData.productos.map((product, i) => {
      if (i === index) {
        return { ...product, [name]: value };
      }
      return product;
    });
    setFormData((prevState) => ({
      ...prevState,
      productos: updatedProducts,
    }));
  };

  const addProduct = () => {
    setFormData((prevState) => ({
      ...prevState,
      productos: [...prevState.productos, { id_producto: "", cantidad: "" }],
    }));
  };

  const removeProduct = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      productos: prevState.productos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePedido(formData.id, formData);
    onClose();
  };

  if (!open) return null;

  return (
    <ProviderModal open={open} onClose={onClose} title="Editar Pedido">
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
                {warehouse.tipo}
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
          {/* {formData.productos.map((product, index) => (
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
          ))} */}
          <button type="button" onClick={addProduct}>
            Agregar Producto
          </button>
        </div>
        <button type="submit" className="update-button">
          Actualizar Pedido
        </button>
      </form>
    </ProviderModal>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { updatePedido, getProducts })(
  PedidoEditModal
);
