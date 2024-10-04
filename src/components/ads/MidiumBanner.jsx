import React from "react";

const MidiumBanner = () => {
  return (
    <section className="midium-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="single-banner">
              <img
                style={{ height: "330px", width: "370" }}
                src="https://fotos.perfil.com//2021/09/16/900/0/ideas-de-looks-para-primavera-con-jeans-anchos-1231666.jpg"
                alt="#"
              />
              <div className="content">
                <p>Man's Collectons</p>
                <h3>
                  Man's items <br />
                  Up to<span> 50%</span>
                </h3>
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="single-banner">
              <img
                style={{ height: "330px", width: "370" }}
                src="https://www.druni.es/blog/wp-content/uploads/2024/02/7-ideas-outfits-mujer-nieve-Img02-250224.jpg"
                alt="#"
              />
              <div className="content">
                <p>shoes women</p>
                <h3 style={{ color: "white" }}>
                  mid season <br /> up to <span>70%</span>
                </h3>
                <a href="#" className="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidiumBanner;
