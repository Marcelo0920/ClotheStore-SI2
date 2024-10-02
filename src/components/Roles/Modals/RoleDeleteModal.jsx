import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { deleteRole } from "../../../actions/role";

const RoleDeleteModal = ({ open, onClose, deleteRole, role }) => {
  const handleDelete = () => {
    if (role) {
      deleteRole(role.id);
      onClose();
    }
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Rol">
      <p>¿Está seguro que desea eliminar el rol "{role?.nombre}"?</p>
      <div className="modal-actions">
        <button
          onClick={onClose}
          className="btn"
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            marginRight: "10px",
          }}
        >
          Cancelar
        </button>
        <button
          onClick={handleDelete}
          className="btn"
          style={{ backgroundColor: "#dc3545", color: "white" }}
        >
          Eliminar
        </button>
      </div>
    </ProviderModal>
  );
};

RoleDeleteModal.propTypes = {
  deleteRole: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  role: PropTypes.object,
};

export default connect(null, { deleteRole })(RoleDeleteModal);
