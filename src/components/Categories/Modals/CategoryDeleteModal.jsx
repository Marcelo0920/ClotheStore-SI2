import React from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const CategoryDeleteModal = ({ open, onClose, onConfirm, categoryName }) => {
  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Categoría">
      <p>¿Está seguro que desea eliminar la categoría "{categoryName}"?</p>
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
          onClick={onConfirm}
          className="btn"
          style={{ backgroundColor: "#dc3545", color: "white" }}
        >
          Eliminar
        </button>
      </div>
    </ProviderModal>
  );
};

export default CategoryDeleteModal;
