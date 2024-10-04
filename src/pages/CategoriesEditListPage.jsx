import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import CategoryList from "../components/Categories/CategoryList";
import CategoryCreateModal from "../components/Categories/Modals/CategoryCreateModal";
import CategoryEditModal from "../components/Categories/Modals/CategoryEditModal";
import CategoryDeleteModal from "../components/Categories/Modals/CategoryDeleteModal";
import { getCategories } from "../actions/category";

const CategoriesEditListPage = ({
  getCategories,
  category: { categories, loading },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (category) => {
    setCurrentCategory(category);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentCategory(null);
  };

  const handleShowDeleteModal = (category) => {
    setCurrentCategory(category);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentCategory(null);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Lista de Categorías" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Categoría
        </button>
      </div>
      <CategoryList
        categories={categories}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />

      <CategoryCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
      />
      <CategoryEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        category={currentCategory}
      />
      <CategoryDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        category={currentCategory}
      />
    </>
  );
};

CategoriesEditListPage.propTypes = {
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { getCategories })(
  CategoriesEditListPage
);
