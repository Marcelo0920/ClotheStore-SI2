import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderInner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryStyle = {
    position: "relative",
  };

  const mainCategoryStyle = {
    display: isHovered ? "block" : "none",
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    zIndex: 1000,
    width: "100%",
  };

  return (
    <div className="header-inner">
      <div className="container">
        <div className="cat-nav-head">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-9 col-12">
              <div className="menu-area">
                <nav className="navbar navbar-expand-lg">
                  <div className="navbar-collapse">
                    <div className="nav-inner">
                      <ul className="nav main-menu menu navbar-nav">
                        <li className="active">
                          <Link to="/">Inicio</Link>
                        </li>
                        <li>
                          <a>
                            Productos<i className="ti-angle-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/categories">Categorias</Link>
                            </li>
                            <li>
                              <Link to="/producteditlist">Lista Productos</Link>
                            </li>
                            <li>
                              <Link to="/pedidos">Pedido Productos</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            Cajas<i className="ti-angle-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/cajas">Lista Cajas</Link>
                            </li>
                            <li>
                              <Link to="/cajasapertura">Apertura Cajas</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            Ventas<i className="ti-angle-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/historialventas">Lista Ventas</Link>
                            </li>
                            <li>
                              <Link to="/facturas">Lista Facturas</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            Shop<i className="ti-angle-down"></i>
                            <span className="new">Nuevo</span>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/cart">Carrito</Link>
                            </li>
                            <li>
                              <Link to="/checkout">Checkout</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a>
                            Infraestructura<i className="ti-angle-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/sucursales">Sucursales</Link>
                            </li>
                            <li>
                              <Link to="/almacenes">Almacenes</Link>
                            </li>
                            <li>
                              <Link to="/providers">Proveedores</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            Usuarios<i className="ti-angle-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/clients">Clientes</Link>
                            </li>
                            <li>
                              <Link to="/users">Usuarios</Link>
                            </li>
                            <li>
                              <Link to="/roles">Roles</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;
