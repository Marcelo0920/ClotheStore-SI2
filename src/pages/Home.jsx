import React from "react";
import Header from "../components/Header/Header";
import HeroSlider from "../components/ads/HeroSlider";
import SmallBanner from "../components/ads/SmallBanner";
import ProductArea from "../components/Products/ProductArea";
import MidiumBanner from "../components/ads/MidiumBanner";
import ShopServices from "../components/ads/ShopServices";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <SmallBanner />
      <ProductArea />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <MidiumBanner />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </div>
  );
};

export default Home;
