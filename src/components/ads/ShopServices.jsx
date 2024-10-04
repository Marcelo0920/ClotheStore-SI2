import React from "react";

const ShopServices = () => {
  const services = [
    {
      icon: "ti-rocket",
      title: "Envio Gratuito",
      description: "Pedidos arriba de los $100",
    },
    {
      icon: "ti-reload",
      title: "Devoluciones Gratuitas",
      description: "Dentro de los 30 dias",
    },
    {
      icon: "ti-lock",
      title: "Pago Seguro",
      description: "100% pago seguro",
    },
    {
      icon: "ti-tag",
      title: "Mejor Precio",
      description: "Precio garantizado",
    },
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
