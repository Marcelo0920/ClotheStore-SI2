import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProductTabs from "./ProductTabs";
import ProductList from "./ProductList";
import { getCategories } from "../../actions/category";
import { getProducts } from "../../actions/product";

const ProductArea = ({ categories, products, getCategories, getProducts }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    getCategories();
    getProducts(); // Fetch all products once
  }, [getCategories, getProducts]);

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  const handleTabChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="product-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Productos en Tendencia</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              <ProductTabs
                activeCategory={activeCategory}
                onTabChange={handleTabChange}
                categories={categories}
              />
              <div className="tab-content" id="myTabContent">
                <ProductList
                  activeCategory={activeCategory}
                  products={products}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  products: state.product.products,
});

export default connect(mapStateToProps, { getCategories, getProducts })(
  ProductArea
);
