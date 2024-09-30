import React from "react";
import ProductForm from "../components/Products/ProductForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import ProductFormSection from "../components/Products/ProductFormSection";

const CreateProductPage = () => {
  return (
    <>
      <div className="create-product-page">
        <Header />

        <Breadcrumbs current="Crear Producto" />
        <ProductFormSection />
        <Footer />
      </div>
    </>
  );
};

export default CreateProductPage;
