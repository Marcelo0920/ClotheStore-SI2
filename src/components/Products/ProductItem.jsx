import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart";

const ProductItem = ({ product, addToCart }) => {
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    if (product.foto) {
      if (typeof product.foto === "string") {
        setImageSource(`data:image/jpeg;base64,${product.foto}`);
      } else if (product.foto instanceof ArrayBuffer) {
        const base64 = arrayBufferToBase64(product.foto);
        setImageSource(`data:image/jpeg;base64,${base64}`);
      } else if (Array.isArray(product.foto)) {
        const uint8Array = new Uint8Array(product.foto);
        const base64 = arrayBufferToBase64(uint8Array.buffer);
        setImageSource(`data:image/jpeg;base64,${base64}`);
      } else {
        console.error("Unsupported image data format", product.foto);
      }
    }
  }, [product.foto]);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/path/to/fallback/image.jpg"; // Replace with actual path
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
      <div className="single-product">
        <div className="product-img">
          <a href={`/product/${product.id}`}>
            {imageSource ? (
              <img
                className="default-img"
                src={imageSource}
                alt={product.nombre}
                onError={handleImageError}
                style={{ width: "240px", height: "240px", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No Image
              </div>
            )}
            {product.descuento && (
              <span className="price-dec">{product.descuento}% Off</span>
            )}
            {product.nuevo && <span className="new">New</span>}
          </a>
          <div className="button-head">
            <div className="product-action-2">
              <a title="Add to cart" onClick={handleAddToCart}>
                Agregar al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <a href={`/product/${product.id}`}>{product.nombre}</a>
          </h3>
          <div className="product-price">
            <span>${parseFloat(product.precio).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(null, { addToCart })(ProductItem);
