import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FacturaModal from "../../Clients/Modals/ClientModal";
import { deleteFactura } from "../../../actions/factura";

const FacturaDeleteModal = ({ open, onClose, factura, deleteFactura }) => {
  if (!open || !factura) return null;

  const handleDelete = () => {
    deleteFactura(factura.id);
    onClose();
  };

  return (
    <FacturaModal open={open} onClose={onClose} title="Eliminar Factura">
      <p>¿Está seguro que desea eliminar la factura de "{factura.nombre}"?</p>
      <div className="modal-actions">
        <button onClick={onClose} className="cancel-button">
          Cancelar
        </button>
        <button onClick={handleDelete} className="delete-button">
          Eliminar
        </button>
      </div>
    </FacturaModal>
  );
};

FacturaDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  factura: PropTypes.object,
  deleteFactura: PropTypes.func.isRequired,
};

export default connect(null, { deleteFactura })(FacturaDeleteModal);
