import React from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const SucursalDeleteModal = ({ open, onClose, onConfirm, sucursalName }) => {
  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Sucursal">
      <p>¿Está seguro que desea eliminar la sucursal "{sucursalName}"?</p>
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

export default SucursalDeleteModal;
