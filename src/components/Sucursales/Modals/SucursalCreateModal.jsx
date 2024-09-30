import React, { useState } from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const SucursalCreateModal = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ nombre: "", direccion: "" });
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Sucursal">
      <form onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre de la Sucursal"
            required
          />
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección de la Sucursal"
            required
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Sucursal
        </button>
      </form>
    </ProviderModal>
  );
};

export default SucursalCreateModal;
