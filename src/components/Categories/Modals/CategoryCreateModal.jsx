import React, { useState } from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const CategoryCreateModal = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
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
    setFormData({ nombre: "", descripcion: "" });
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Categoría">
      <form onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre de la Categoría"
            required
          />
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción de la Categoría"
            required
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Categoría
        </button>
      </form>
    </ProviderModal>
  );
};

export default CategoryCreateModal;
