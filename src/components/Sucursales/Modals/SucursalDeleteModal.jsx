import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { deleteSucursal } from "../../../actions/sucursal";

const SucursalDeleteModal = ({ open, onClose, deleteSucursal, sucursal }) => {
  const handleDelete = () => {
    if (sucursal) {
      deleteSucursal(sucursal.id);
      onClose();
    }
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Sucursal">
      <p>¿Está seguro que desea eliminar la sucursal "{sucursal?.nombre}"?</p>
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

SucursalDeleteModal.propTypes = {
  deleteSucursal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  sucursal: PropTypes.object,
};

export default connect(null, { deleteSucursal })(SucursalDeleteModal);
