import React from "react";

const ClientModal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="gameModalClose" onClick={onClose}>
          X
        </p>
        <div className="modal-content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ClientModal;
