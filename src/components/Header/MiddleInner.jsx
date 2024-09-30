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
                    placeholder="Search Products Here....."
                    type="search"
                  />
                  <button className="btnn">
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-12">
            <div className="right-bar">
              <div className="sinlge-bar">
                <a href="#" className="single-icon">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </a>
              </div>
              <div className="sinlge-bar">
                <a href="#" className="single-icon">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                </a>
              </div>
              <div className="sinlge-bar shopping">
                <a href="#" className="single-icon">
                  <i className="ti-bag"></i>{" "}
                  <span className="total-count">2</span>
                </a>
                {/* Shopping Item */}
                <div className="shopping-item">
                  <div className="dropdown-cart-header">
                    <span>2 Items</span>
                    <a href="#">View Cart</a>
                  </div>
                  <ul className="shopping-list">
                    {/* Add shopping list items here */}
                  </ul>
                  <div className="bottom">
                    <div className="total">
                      <span>Total</span>
                      <span className="total-amount">$134.00</span>
                    </div>
                    <a href="checkout.html" className="btn animate">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInner;
