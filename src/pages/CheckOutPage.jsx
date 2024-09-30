import React from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import CheckoutSection from "../components/Checkout/CheckoutSection";
import ShopServices from "../components/ads/ShopServices";
import Footer from "../components/Footer";

const CheckOutPage = () => {
  return (
    <>
      <Header />
      <Breadcrumbs current="Checkout" />
      <CheckoutSection />
      <ShopServices />
      <Footer />
    </>
  );
};

export default CheckOutPage;
