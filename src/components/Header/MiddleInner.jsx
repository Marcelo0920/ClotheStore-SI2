import React from "react";

const MiddleInner = () => {
  return (
    <div className="middle-inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-12">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="search-top">
              <div className="top-search">
                <a href="#0">
                  <i className="ti-search"></i>
                </a>
              </div>
              <div className="search-top">
                <form className="search-form">
                  <input
                    type="text"
                    placeholder="Search here..."
                    name="search"
                  />
                  <button value="search" type="submit">
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="mobile-nav"></div>
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            <div className="search-bar-top">
              <div className="search-bar">
                <form>
                  <input
                    name="search"
                    placeholder="Buscar Productos....."
                    type="search"
                  />
                  <button className="btnn">
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInner;
