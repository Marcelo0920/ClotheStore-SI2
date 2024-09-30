import React from "react";
import ProductForm from "./ProductForm";

const ProductFormSection = () => {
  return (
    <section className="shop checkout container mt-5 mb-5">
      <div className="">
        <div className="row">
          <div className="">
            <ProductForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFormSection;
