import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import CategoryList from "../components/Categories/CategoryList";
import CategoryCreateModal from "../components/Categories/Modals/CategoryCreateModal";
import CategoryEditModal from "../components/Categories/Modals/CategoryEditModal";
import CategoryDeleteModal from "../components/Categories/Modals/CategoryDeleteModal";

const CategoriesEditListPage = () => {
  const [categories, setCategories] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    // Fetch categories from your API here
    // For now, we'll use mock data
    setCategories([
      {
        id: 1,
        nombre: "falda",
        descripcion: "es una falda",
      },
      {
        id: 2,
        nombre: "pantalón",
        descripcion: "es un pantalón",
      },
    ]);
  }, []);

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

  const handleSaveCategory = (categoryData) => {
    // Here you would typically send a POST or PUT request to your API
    if (categoryData.id) {
      setCategories(
        categories.map((c) => (c.id === categoryData.id ? categoryData : c))
      );
    } else {
      const newCategory = {
        id: Date.now(), // This should be generated by the backend in a real scenario
        ...categoryData,
      };
      setCategories([...categories, newCategory]);
    }
    handleCloseCreateModal();
    handleCloseEditModal();
  };

  const handleDeleteCategory = () => {
    // Here you would typically send a DELETE request to your API
    setCategories(categories.filter((c) => c.id !== currentCategory.id));
    handleCloseDeleteModal();
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
        onSave={handleSaveCategory}
      />
      <CategoryEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        onSave={handleSaveCategory}
        category={currentCategory}
      />
      <CategoryDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteCategory}
        categoryName={currentCategory?.nombre}
      />
    </>
  );
};

export default CategoriesEditListPage;
