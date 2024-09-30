import React, { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductList from "./ProductList";

const ProductArea = () => {
  const [activeTab, setActiveTab] = useState("man");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="product-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Item</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              <ProductTabs
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
              <div className="tab-content" id="myTabContent">
                <ProductList activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
