import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserModal from "./UserModal";
import { deleteUser } from "../../../actions/user";

const UserDeleteModal = ({ open, onClose, user, deleteUser }) => {
  if (!open || !user) return null;

  const handleDelete = () => {
    deleteUser(user.id);
    onClose();
  };

  return (
    <UserModal open={open} onClose={onClose} title="Eliminar Usuario">
      <p>¿Está seguro que desea eliminar el usuario "{user.username}"?</p>
      <div className="modal-actions">
        <button onClick={onClose} className="cancel-button">
          Cancelar
        </button>
        <button onClick={handleDelete} className="delete-button">
          Eliminar
        </button>
      </div>
    </UserModal>
  );
};

UserDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,
  deleteUser: PropTypes.func.isRequired,
};

export default connect(null, { deleteUser })(UserDeleteModal);
