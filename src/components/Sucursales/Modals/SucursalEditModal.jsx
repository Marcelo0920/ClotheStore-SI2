import React, { useState, useEffect } from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const SucursalEditModal = ({ open, onClose, onSave, sucursal }) => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    direccion: "",
  });

  useEffect(() => {
    if (sucursal) {
      setFormData(sucursal);
    }
  }, [sucursal]);

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
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Editar Sucursal">
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
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          Guardar Cambios
        </button>
      </form>
    </ProviderModal>
  );
};

export default SucursalEditModal;
