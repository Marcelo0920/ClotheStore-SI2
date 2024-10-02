import React from "react";
import PropTypes from "prop-types";
import ClientModal from "./ClientModal";

const ClientDeleteModal = ({ open, onClose, onConfirm, clientName }) => {
  if (!open) return null;

  return (
    <ClientModal open={open} onClose={onClose} title="Eliminar Cliente">
      <p>¿Está seguro que desea eliminar el cliente "{clientName}"?</p>
      <div className="modal-actions">
        <button onClick={onClose} className="cancel-button">
          Cancelar
        </button>
        <button onClick={onConfirm} className="delete-button">
          Eliminar
        </button>
      </div>
    </ClientModal>
  );
};

ClientDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  clientName: PropTypes.string,
};

export default ClientDeleteModal;
