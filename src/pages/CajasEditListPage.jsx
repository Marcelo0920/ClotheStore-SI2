import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import CajaList from "../components/Cajas/CajaList";
import CajaCreateModal from "../components/Cajas/Modals/CajaCreateModal";
import CajaEditModal from "../components/Cajas/Modals/CajaEditModal";
import CajaDeleteModal from "../components/Cajas/Modals/CajaDeleteModal";
import { getCajas } from "../actions/caja";
import { getSucursals } from "../actions/sucursal";

const CajasEditListPage = ({
  getCajas,
  getSucursals,
  caja: { cajas, loading },
  sucursal: { sucursals },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentCaja, setCurrentCaja] = useState(null);

  useEffect(() => {
    getCajas();
    getSucursals();
  }, [getCajas, getSucursals]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (caja) => {
    setCurrentCaja(caja);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentCaja(null);
  };

  const handleShowDeleteModal = (caja) => {
    setCurrentCaja(caja);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentCaja(null);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Lista de Cajas" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Caja
        </button>
      </div>
      <CajaList
        cajas={cajas}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />

      <CajaCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
        sucursales={sucursals}
      />
      <CajaEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        caja={currentCaja}
        sucursales={sucursals}
      />
      <CajaDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        caja={currentCaja}
      />
    </>
  );
};

CajasEditListPage.propTypes = {
  getCajas: PropTypes.func.isRequired,
  getSucursals: PropTypes.func.isRequired,
  caja: PropTypes.object.isRequired,
  sucursal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  caja: state.caja,
  sucursal: state.sucursal,
});

export default connect(mapStateToProps, { getCajas, getSucursals })(
  CajasEditListPage
);
