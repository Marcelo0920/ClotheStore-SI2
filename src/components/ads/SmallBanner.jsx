import React from "react";

const SmallBanner = () => {
  return (
    <section className="small-banner section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-banner">
              <img
                style={{ height: "280px", width: "370" }}
                src="https://phantom-telva.unidadeditorial.es/ea48ae26a3633e7f919bf59f889b9d82/crop/402x306/1987x1363/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/02/16594486125706.jpg"
                alt="#"
              />
              <div className="content">
                <p>Collecion Ellas</p>
                <h3>
                  Viaje de Verano <br /> coleccion
                </h3>
                <a href="#">Explorar ahora</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-banner">
              <img
                style={{ height: "280px", width: "370" }}
                src="https://www.shopaholicsmexico.com/wp-content/uploads/Outfit-Casual-Mujer-con-Tenis.webp"
                alt="#"
              />
              <div className="content">
                <p>Collecciones de Bolsos</p>
                <h3>
                  Bolso Asombroso <br /> 2020
                </h3>
                <a href="#">Comprar Ahora</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="single-banner tab-height">
              <img
                style={{ height: "280px", width: "370" }}
                src="https://editorialtelevisa.brightspotcdn.com/dims4/default/16dfaa4/2147483647/strip/true/crop/1500x845+0+31/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb0%2F84%2F7f204a3149c2a5e7a59993e87ec2%2Ffeliz-estudiante-estilo-posando-parque-moderno-wesring-jeans-blancos-chaqueta-camiseta.jpg"
                alt="#"
              />
              <div className="content">
                <p>Ofertas Flash</p>
                <h3 style={{ color: "white" }}>
                  Mitad de temporada <br /> Hasta el <span>40%</span> descuento
                </h3>
                <a href="#">Discover Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallBanner;
