import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
      <div className="single-product">
        <div className="product-img">
          <a href="product-details.html">
            <img
              className="default-img"
              src={product.image}
              alt={product.name}
            />
            <img
              className="hover-img"
              src={product.hoverImage || product.image}
              alt={product.name}
            />
            {product.discount && (
              <span className="price-dec">{product.discount}% Off</span>
            )}
            {product.new && <span className="new">New</span>}
          </a>
          <div className="button-head">
            <div className="product-action">
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                title="Quick View"
                href="#"
              >
                <i className="ti-eye"></i>
                <span>Quick Shop</span>
              </a>
              <a title="Wishlist" href="#">
                <i className="ti-heart"></i>
                <span>Add to Wishlist</span>
              </a>
              <a title="Compare" href="#">
                <i className="ti-bar-chart-alt"></i>
                <span>Add to Compare</span>
              </a>
            </div>
            <div className="product-action-2">
              <a title="Add to cart" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <a href="product-details.html">{product.name}</a>
          </h3>
          <div className="product-price">
            {product.oldPrice && (
              <span className="old">${product.oldPrice}</span>
            )}
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
