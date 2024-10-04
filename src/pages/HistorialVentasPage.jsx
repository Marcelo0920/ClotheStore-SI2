import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import VentaDeleteModal from "../components/Ventas/Modals/VentaDeleteModal";
import VentasList from "../components/Ventas/VentasList";
import { getOrdenes, deleteOrden } from "../actions/venta";

const HistorialVentasPage = ({
  getOrdenes,
  deleteOrden,
  venta: { ordenes, loading },
}) => {
  useEffect(() => {
    getOrdenes();
  }, [getOrdenes]);

  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [currentVenta, setCurrentVenta] = React.useState(null);

  const handleShowDeleteModal = (venta) => {
    setCurrentVenta(venta);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentVenta(null);
  };

  const handleDeleteVenta = () => {
    deleteOrden(currentVenta.id);
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <VentasList ventas={ordenes} onDelete={handleShowDeleteModal} />
      )}
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

HistorialVentasPage.propTypes = {
  getOrdenes: PropTypes.func.isRequired,
  deleteOrden: PropTypes.func.isRequired,
  venta: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  venta: state.venta,
});

export default connect(mapStateToProps, { getOrdenes, deleteOrden })(
  HistorialVentasPage
);
