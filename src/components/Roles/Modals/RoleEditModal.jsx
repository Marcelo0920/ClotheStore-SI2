import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { updateRole } from "../../../actions/role";

const RoleEditModal = ({ open, onClose, updateRole, role }) => {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (role) {
      setNombre(role.nombre);
    }
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRole(role.id, { nombre });
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

RoleEditModal.propTypes = {
  updateRole: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  role: PropTypes.object,
};

export default connect(null, { updateRole })(RoleEditModal);
