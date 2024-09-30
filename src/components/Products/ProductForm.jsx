import React, { useState } from "react";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    category: "",
    name: "",
    price: "",
    image: null,
    description: "",
    size: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the productData to your backend
    console.log("Product Data:", productData);
    // Reset form or redirect user after successful submission
  };

  return (
    <div className="chekcout-form">
      <h1>Create New Product</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="category">
                Category<span>*</span>
              </label>
              <select
                name="category"
                id="category"
                value={productData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                {/* Add more categories as needed */}
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="name">
                Product Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={productData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="price">
                Price<span>*</span>
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={productData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="image">
                Product Image<span>*</span>
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="description">
                Description<span>*</span>
              </label>
              <textarea
                name="description"
                id="description"
                rows="4"
                value={productData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                name="size"
                id="size"
                value={productData.size}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                name="color"
                id="color"
                value={productData.color}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group button">
              <button type="submit" className="btn">
                Create Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
