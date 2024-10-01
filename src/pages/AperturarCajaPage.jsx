import React, { useState } from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import CajasAperturaList from "../components/Cajas/CajasAperturaList";

const AperturarCajaPage = () => {
  const [cajas, setCajas] = useState([
    {
      id: 1,
      nombre: "Caja 1",
      sucursal: "Sucursal Central",
      estado: "Cerrada",
    },
    {
      id: 2,
      nombre: "Caja 2",
      sucursal: "Sucursal Norte",
      estado: "Abierta",
    },
    {
      id: 3,
      nombre: "Caja 3",
      sucursal: "Sucursal Sur",
      estado: "Cerrada",
    },
  ]);

  const handleAperturar = async (cajaId) => {
    // Here you would typically make an API call to your backend
    // For demonstration, we'll just update the state
    const payload = {
      id_usuario: "1", // This should be dynamically set based on the logged-in user
      id_caja: cajaId.toString(),
    };
    console.log("Aperturar payload:", payload);

    setCajas(
      cajas.map((caja) =>
        caja.id === cajaId ? { ...caja, estado: "Abierta" } : caja
      )
    );
  };

  const handleCerrar = async (cajaId) => {
    // Here you would typically make an API call to your backend
    // For demonstration, we'll just update the state
    const payload = {
      id: cajaId,
    };
    console.log("Cerrar payload:", payload);

    setCajas(
      cajas.map((caja) =>
        caja.id === cajaId ? { ...caja, estado: "Cerrada" } : caja
      )
    );
  };

  const handleArquear = (cajaId) => {
    // Implement arquear functionality
    console.log("Arquear caja:", cajaId);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Aperturar Caja" />
      <CajasAperturaList
        cajas={cajas}
        onAperturar={handleAperturar}
        onCerrar={handleCerrar}
        onArquear={handleArquear}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

export default AperturarCajaPage;
