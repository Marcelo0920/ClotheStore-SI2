import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  // This would typically come from a state or props
  const products = [
    {
      id: 1,
      name: "Women Dress",
      description: "Maboriosam in a tonto nesciung eget distingy magndapibus.",
      price: 110.0,
      category: "Clothing",
    },
    {
      id: 2,
      name: "Men's T-Shirt",
      description: "Comfortable cotton t-shirt for everyday wear.",
      price: 25.99,
      category: "Clothing",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      price: 199.99,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Women Dress",
      description: "Maboriosam in a tonto nesciung eget distingy magndapibus.",
      price: 110.0,
      category: "Clothing",
    },
    {
      id: 5,
      name: "Men's T-Shirt",
      description: "Comfortable cotton t-shirt for everyday wear.",
      price: 25.99,
      category: "Clothing",
    },
    {
      id: 6,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      price: 199.99,
      category: "Electronics",
    },
  ];

  const handleEdit = (id) => {
    console.log(`Edit product with id: ${id}`);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log(`Delete product with id: ${id}`);
    // Implement delete functionality
  };

  return (
    <div className="product-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>PRODUCT</th>
                  <th>NAME</th>
                  <th>CATEGORY</th>
                  <th className="text-center">UNIT PRICE</th>
                  <th className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
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

export default ProductList;
