import React, { useState } from "react";

const ClientForm = () => {
  const [clientData, setClientData] = useState({
    id: "",
    name: "",
    lastname: "",
    address: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the clientData to your backend
    console.log("Client Data:", clientData);
    // Reset form or redirect user after successful submission
  };

  return (
    <div className="checkout-form">
      <h1>Create New Client</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="id">
                ID<span>*</span>
              </label>
              <input
                type="text"
                name="id"
                id="id"
                value={clientData.id}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={clientData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="lastname">
                Last Name<span>*</span>
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={clientData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="address">
                Address<span>*</span>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={clientData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="gender">
                Gender<span>*</span>
              </label>
              <select
                name="gender"
                id="gender"
                value={clientData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="age">
                Age<span>*</span>
              </label>
              <input
                type="number"
                name="age"
                id="age"
                value={clientData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group button">
              <button type="submit" className="btn">
                Create Client
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
