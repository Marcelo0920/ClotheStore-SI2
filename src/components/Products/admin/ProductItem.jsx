import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product, onEdit, onDelete }) => {
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    if (product.foto) {
      if (typeof product.foto === "string") {
        // If foto is already a base64 string
        setImageSource(`data:image/jpeg;base64,${product.foto}`);
      } else if (product.foto instanceof ArrayBuffer) {
        // If foto is an ArrayBuffer
        const base64 = arrayBufferToBase64(product.foto);
        setImageSource(`data:image/jpeg;base64,${base64}`);
      } else if (Array.isArray(product.foto)) {
        // If foto is a regular array
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
    e.target.onerror = null; // Prevents infinite loop if fallback image also fails
    e.target.src = "path/to/fallback/image.jpg"; // Replace with actual path to a fallback image
  };

  return (
    <tr>
      <td className="image" data-title="Photo">
        {imageSource ? (
          <img
            src={imageSource}
            alt={product.nombre}
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
            onError={handleImageError}
          />
        ) : (
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No Image
          </div>
        )}
      </td>
      <td className="product-des" data-title="Nombre">
        <p className="product-name">{product.nombre}</p>
      </td>
      <td className="product-des" data-title="Descripción">
        <p className="product-des">{product.descripcion}</p>
      </td>
      <td className="price" data-title="Precio">
        <span>${parseFloat(product.precio).toFixed(2)}</span>
      </td>
      <td className="product-talla" data-title="Talla">
        <span>{product.talla}</span>
      </td>
      <td className="product-color" data-title="Color">
        <span>{product.color}</span>
      </td>
      <td className="product-category" data-title="Categoría">
        <span>{product.id_categoria?.nombre || "N/A"}</span>
      </td>
      <td className="action" data-title="Actions">
        <button
          onClick={() => onEdit(product)}
          className="btn"
          style={{
            marginRight: "10px",
            backgroundColor: "#ffc107",
            borderColor: "#ffc107",
            color: "#fff",
          }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product)}
          className="btn btn-danger"
          style={{
            backgroundColor: "#dc3545",
            borderColor: "#dc3545",
            color: "#fff",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductItem;
