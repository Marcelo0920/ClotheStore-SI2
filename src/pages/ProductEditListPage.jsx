import React from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import ProductList from "../components/Products/admin/ProductList";
import { Link } from "react-router-dom";

const ProductEditListPage = () => {
  return (
    <>
      <Header />
      <Breadcrumbs current="Product List" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <Link>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Crear
          </button>
        </Link>
      </div>
      <ProductList />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

export default ProductEditListPage;
