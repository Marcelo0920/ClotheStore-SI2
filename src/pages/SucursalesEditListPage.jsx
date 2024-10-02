import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import SucursalDeleteModal from "../components/Sucursales/Modals/SucursalDeleteModal";
import SucursalEditModal from "../components/Sucursales/Modals/SucursalEditModal";
import SucursalCreateModal from "../components/Sucursales/Modals/SucursalCreateModal";
import SucursalList from "../components/Sucursales/SucursalList";
import { getSucursals } from "../actions/sucursal";

const SucursalesEditListPage = ({
  getSucursals,
  sucursal: { sucursals, loading },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentSucursal, setCurrentSucursal] = useState(null);

  useEffect(() => {
    getSucursals();
  }, [getSucursals]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (sucursal) => {
    setCurrentSucursal(sucursal);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentSucursal(null);
  };

  const handleShowDeleteModal = (sucursal) => {
    setCurrentSucursal(sucursal);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentSucursal(null);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Lista de Sucursales" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Sucursal
        </button>
      </div>
      <SucursalList
        sucursales={sucursals}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />

      <SucursalCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
      />
      <SucursalEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        sucursal={currentSucursal}
      />
      <SucursalDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        sucursal={currentSucursal}
      />
    </>
  );
};

SucursalesEditListPage.propTypes = {
  getSucursals: PropTypes.func.isRequired,
  sucursal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sucursal: state.sucursal,
});

export default connect(mapStateToProps, { getSucursals })(
  SucursalesEditListPage
);
