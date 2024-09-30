import React from "react";

const ProviderDeleteModal = ({ open, onClose, onConfirm, providerName }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="gameModalClose" onClick={onClose}>
          X
        </p>
        <div className="modal-content">
          <h3>Eliminar Proveedor</h3>
          <p>¿Está seguro que desea eliminar el proveedor "{providerName}"?</p>
          <div className="modal-actions">
            <button onClick={onClose} className="cancel-button">
              Cancelar
            </button>
            <button onClick={onConfirm} className="delete-button">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDeleteModal;
