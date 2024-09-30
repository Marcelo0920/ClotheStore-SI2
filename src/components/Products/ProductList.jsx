import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ activeTab }) => {
  // This would typically come from a database or API
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.0,
      image: "https://via.placeholder.com/550x750",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.0,
      image: "https://via.placeholder.com/550x750",
    },
    {
      id: 3,
      name: "Product 2",
      price: 39.0,
      image: "https://via.placeholder.com/550x750",
    },
    {
      id: 4,
      name: "Product 2",
      price: 39.0,
      image: "https://via.placeholder.com/550x750",
    },
    {
      id: 5,
      name: "Product 2",
      price: 39.0,
      image: "https://via.placeholder.com/550x750",
    },
    {
      id: 6,
      name: "Product 2",
      price: 39.0,
      image: "https://via.placeholder.com/550x750",
    },
    {
      id: 7,
      name: "Product 2",
      price: 39.0,
      image: "https://via.placeholder.com/550x750",
    },
    {
      id: 8,
      name: "Product 2",
      price: 39.0,
      image: "https://via.placeholder.com/550x750",
    },
  ];

  return (
    <div
      className={`tab-pane fade ${activeTab === "man" ? "show active" : ""}`}
      id="man"
      role="tabpanel"
    >
      <div className="tab-single">
        <div className="row">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
