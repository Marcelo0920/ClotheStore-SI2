import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { deleteWarehouse } from "../../../actions/almacen";

const AlmacenDeleteModal = ({ open, onClose, deleteWarehouse, almacen }) => {
  const handleDelete = () => {
    if (almacen) {
      deleteWarehouse(almacen.id);
      onClose();
    }
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Almacén">
      <p>
        ¿Está seguro que desea eliminar el almacén número "{almacen?.numero}"?
      </p>
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

AlmacenDeleteModal.propTypes = {
  deleteWarehouse: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  almacen: PropTypes.object,
};

export default connect(null, { deleteWarehouse })(AlmacenDeleteModal);
