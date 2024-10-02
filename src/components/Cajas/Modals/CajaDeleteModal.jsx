import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { deleteCaja } from "../../../actions/caja";

const CajaDeleteModal = ({ open, onClose, deleteCaja, caja }) => {
  const handleDelete = () => {
    if (caja) {
      deleteCaja(caja.id);
      onClose();
    }
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Caja">
      <p>¿Está seguro que desea eliminar la caja número "{caja?.numero}"?</p>
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

CajaDeleteModal.propTypes = {
  deleteCaja: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  caja: PropTypes.object,
};

export default connect(null, { deleteCaja })(CajaDeleteModal);
