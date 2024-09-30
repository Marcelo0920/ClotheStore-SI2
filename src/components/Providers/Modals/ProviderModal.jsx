import React, { useEffect } from "react";

const ProviderModal = ({ open, onClose, children, title }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <button className="gameModalClose" onClick={onClose}>
          X
        </button>
        <div className="modal-content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProviderModal;
