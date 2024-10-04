import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>PHOTO</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCIÓN</th>
                  <th>PRECIO</th>
                  <th>TALLA</th>
                  <th>COLOR</th>
                  <th>CATEGORÍA</th>
                  <th className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductList;
