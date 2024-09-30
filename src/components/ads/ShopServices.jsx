import React from "react";

const ShopServices = () => {
  const services = [
    {
      icon: "ti-rocket",
      title: "Free shiping",
      description: "Orders over $100",
    },
    {
      icon: "ti-reload",
      title: "Free Return",
      description: "Within 30 days returns",
    },
    {
      icon: "ti-lock",
      title: "Sucure Payment",
      description: "100% secure payment",
    },
    { icon: "ti-tag", title: "Best Peice", description: "Guaranteed price" },
  ];

  return (
    <section className="shop-services section home">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div className="single-service">
                <i className={service.icon}></i>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopServices;
