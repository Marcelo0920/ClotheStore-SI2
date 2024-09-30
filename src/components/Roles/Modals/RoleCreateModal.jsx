import React, { useState } from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const RoleCreateModal = ({ open, onClose, onSave }) => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nombre });
    setNombre("");
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Rol">
      <form onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del Rol"
            required
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Rol
        </button>
      </form>
    </ProviderModal>
  );
};

export default RoleCreateModal;
