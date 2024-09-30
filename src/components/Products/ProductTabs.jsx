import React from "react";

const ProductTabs = ({ activeTab, onTabChange }) => {
  const tabs = ["man", "women", "kids", "accessories", "essential", "prices"];

  return (
    <div className="nav-main">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <a
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => onTabChange(tab)}
              role="tab"
              href={`#${tab}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTabs;
