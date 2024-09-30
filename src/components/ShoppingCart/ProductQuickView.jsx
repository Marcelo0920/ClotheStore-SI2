import React from "react";

const ProductQuickView = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="ti-close" aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="product-gallery">
                  <div className="quickview-slider-active">
                    <div className="single-slider">
                      <img src="images/modal1.jpg" alt="#" />
                    </div>
                    <div className="single-slider">
                      <img src="images/modal2.jpg" alt="#" />
                    </div>
                    <div className="single-slider">
                      <img src="images/modal3.jpg" alt="#" />
                    </div>
                    <div className="single-slider">
                      <img src="images/modal4.jpg" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="quickview-content">
                  <h2>Flared Shift Dress</h2>
                  <div className="quickview-ratting-review">
                    <div className="quickview-ratting-wrap">
                      <div className="quickview-ratting">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa fa-star${i < 4 ? " yellow" : ""}`}
                          ></i>
                        ))}
                      </div>
                      <a href="#"> (1 customer review)</a>
                    </div>
                    <div className="quickview-stock">
                      <span>
                        <i className="fa fa-check-circle-o"></i> in stock
                      </span>
                    </div>
                  </div>
                  <h3>$29.00</h3>
                  <div className="quickview-peragraph">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia iste laborum ad impedit pariatur esse optio
                      tempora sint ullam autem deleniti nam in quos qui nemo
                      ipsum numquam.
                    </p>
                  </div>
                  {/* Size and Color selects would go here */}
                  <div className="quantity">
                    {/* Quantity input would go here */}
                  </div>
                  <div className="add-to-cart">
                    <a href="#" className="btn">
                      Add to cart
                    </a>
                    <a href="#" className="btn min">
                      <i className="ti-heart"></i>
                    </a>
                    <a href="#" className="btn min">
                      <i className="fa fa-compress"></i>
                    </a>
                  </div>
                  <div className="default-social">
                    <h4 className="share-now">Share:</h4>
                    <ul>
                      <li>
                        <a className="facebook" href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="youtube" href="#">
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a className="dribbble" href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
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

export default ProductQuickView;
