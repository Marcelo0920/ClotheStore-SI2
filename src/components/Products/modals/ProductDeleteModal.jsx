import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProduct } from "../../../actions/product";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const ProductDeleteModal = ({ open, onClose, product, deleteProduct }) => {
  const handleDelete = () => {
    if (product) {
      deleteProduct(product.id);
      onClose();
    }
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Producto">
      <div className="modal-content">
        <p>
          ¿Estás seguro de que quieres eliminar el producto "{product?.nombre}"?
        </p>
        <div className="modal-actions">
          <button onClick={handleDelete} className="delete-button">
            Eliminar
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancelar
          </button>
        </div>
      </div>
    </ProviderModal>
  );
};

ProductDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object,
  deleteProduct: PropTypes.func.isRequired,
};

export default connect(null, { deleteProduct })(ProductDeleteModal);
