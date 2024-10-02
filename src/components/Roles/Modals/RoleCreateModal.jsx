import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { createRole } from "../../../actions/role";

const RoleCreateModal = ({ open, onClose, createRole }) => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createRole({ nombre });
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

RoleCreateModal.propTypes = {
  createRole: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default connect(null, { createRole })(RoleCreateModal);
