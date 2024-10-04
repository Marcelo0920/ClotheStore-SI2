import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";

import { getProducts } from "../actions/product";
import ProductList from "../components/Products/admin/ProductList";
import ProductCreateModal from "../components/Products/modals/ProductCreateModal";
import ProductEditModal from "../components/Products/modals/ProductEditModal";
import ProductDeleteModal from "../components/Products/modals/ProductDeleteModal";

const ProductEditListPage = ({
  getProducts,
  product: { products, loading },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, [getProducts]);


  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentProduct(null);
  };

  const handleShowDeleteModal = (product) => {
    setCurrentProduct(product);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentProduct(null);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Product List" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear
        </button>
      </div>
      <ProductList
        products={products}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />

      <ProductCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
      />
      <ProductEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        product={currentProduct}
      />
      <ProductDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        product={currentProduct}
      />
    </>
  );
};

ProductEditListPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(ProductEditListPage);
