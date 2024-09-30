import React from "react";

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <tr key={product.id}>
      <td className="image" data-title="No">
        <img src="https://via.placeholder.com/100x100" alt="#" />
      </td>
      <td className="product-des" data-title="Description">
        <p className="product-name">
          <a href="#">{product.name}</a>
        </p>
        <p className="product-des">{product.description}</p>
      </td>
      <td className="product-category" data-title="Category">
        <span>{product.category}</span>
      </td>
      <td className="price" data-title="Price">
        <span>${product.price.toFixed(2)} </span>
      </td>
      <td className="action" data-title="Actions">
        <button
          onClick={() => onEdit(product.id)}
          className="btn" // Changed to btn-warning for yellow color
          style={{
            marginRight: "10px",
            backgroundColor: "#ffc107", // A yellow color
            borderColor: "#ffc107",
            color: "#ffff", // Black text for better contrast on yellow
          }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="btn btn-danger"
          style={{
            backgroundColor: "#dc3545", // A red color
            borderColor: "#dc3545",
            color: "#fff", // White text for better contrast on red
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
