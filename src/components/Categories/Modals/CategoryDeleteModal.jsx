import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { deleteCategory } from "../../../actions/category";

const CategoryDeleteModal = ({ open, onClose, deleteCategory, category }) => {
  const handleDelete = () => {
    if (category) {
      deleteCategory(category.id);
      onClose();
    }
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Categoría">
      <p>¿Está seguro que desea eliminar la categoría "{category?.nombre}"?</p>
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

CategoryDeleteModal.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  category: PropTypes.object,
};

export default connect(null, { deleteCategory })(CategoryDeleteModal);
