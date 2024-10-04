import React from "react";

const ProductTabs = ({ activeCategory, onTabChange, categories }) => {
  return (
    <div className="nav-main">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <a
              className={`nav-link ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => onTabChange(category.id)}
              role="tab"
            >
              {category.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTabs;
