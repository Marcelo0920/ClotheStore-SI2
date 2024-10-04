import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "./ProviderModal";
import { deleteProvider } from "../../../actions/provider";

const ProviderDeleteModal = ({ open, onClose, provider, deleteProvider }) => {
  if (!open || !provider) return null;

  const handleDelete = () => {
    deleteProvider(provider.id);
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Proveedor">
      <p>¿Está seguro que desea eliminar el proveedor "{provider.nombre}"?</p>
      <div className="modal-actions">
        <button onClick={onClose} className="cancel-button">
          Cancelar
        </button>
        <button onClick={handleDelete} className="delete-button">
          Eliminar
        </button>
      </div>
    </ProviderModal>
  );
};

ProviderDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  provider: PropTypes.object,
  deleteProvider: PropTypes.func.isRequired,
};

export default connect(null, { deleteProvider })(ProviderDeleteModal);
