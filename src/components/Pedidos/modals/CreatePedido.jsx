import React, { useState } from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const CrearPedidoModal = ({ open, onClose, onSave, providers, warehouses }) => {
  const [formData, setFormData] = useState({
    id_almacen: "",
    id_proveedor: "",
    productos: [{ id_producto: "", cantidad: "" }],
  });

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
    onSave(formData);
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
                {warehouse.nombre}
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
          {formData.productos.map((product, index) => (
            <div key={index} className="product-item">
              <input
                type="text"
                name="id_producto"
                value={product.id_producto}
                onChange={(e) => handleProductChange(index, e)}
                placeholder="ID Producto"
                required
              />
              <input
                type="number"
                name="cantidad"
                value={product.cantidad}
                onChange={(e) => handleProductChange(index, e)}
                placeholder="Cantidad"
                required
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

export default CrearPedidoModal;
