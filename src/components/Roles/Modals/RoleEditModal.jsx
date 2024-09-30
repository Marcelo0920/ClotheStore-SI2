import React, { useState, useEffect } from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const RoleEditModal = ({ open, onClose, onSave, role }) => {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (role) {
      setNombre(role.nombre);
    }
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: role.id, nombre });
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Editar Rol">
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
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          Guardar Cambios
        </button>
      </form>
    </ProviderModal>
  );
};

export default RoleEditModal;
