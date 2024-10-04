import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ activeCategory, products }) => {
  const filteredProducts = activeCategory
    ? products.filter((product) => product.id_categoria.id === activeCategory)
    : products;

  return (
    <div
      className="tab-pane fade show active"
      id={`category-${activeCategory}`}
      role="tabpanel"
    >
      <div className="tab-single">
        <div className="row">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
