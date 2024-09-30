import React from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import ProductQuickView from "../components/ShoppingCart/ProductQuickView";

const CartPage = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <ShoppingCart />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <ProductQuickView />
      <Footer />
    </>
  );
};

export default CartPage;
