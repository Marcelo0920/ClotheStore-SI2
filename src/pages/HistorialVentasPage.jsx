import React, { useState } from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import VentaDeleteModal from "../components/Ventas/Modals/VentaDeleteModal";
import VentasList from "../components/Ventas/VentasList";

const HistorialVentasPage = () => {
  const [ventas, setVentas] = useState([
    {
      id: 1,
      descuento: "20.2",
      id_cliente: "1",
      id_metodo_pago: "1",
      id_usuario: "1",
      lista_ordenes: [
        {
          id_producto: "2",
          cantidad: 5,
        },
      ],
      fecha: "2023-09-30", // Adding a date field for display purposes
      total: "150.80", // Adding a total field for display purposes
    },
    // Add more mock data as needed
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentVenta, setCurrentVenta] = useState(null);

  const handleShowDeleteModal = (venta) => {
    setCurrentVenta(venta);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentVenta(null);
  };

  const handleDeleteVenta = () => {
    setVentas(ventas.filter((v) => v.id !== currentVenta.id));
    handleCloseDeleteModal();
  };

  return (
    <>
      <VentaDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteVenta}
        ventaId={currentVenta?.id}
      />
      <Header />
      <Breadcrumbs current="Historial de Ventas" />
      <VentasList ventas={ventas} onDelete={handleShowDeleteModal} />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

export default HistorialVentasPage;
