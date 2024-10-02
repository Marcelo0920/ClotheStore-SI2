import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import AlmacenList from "../components/Almacenes/AlmacenList";
import AlmacenCreateModal from "../components/Almacenes/Modals/AlmacenCreateModal";
import AlmacenEditModal from "../components/Almacenes/Modals/AlmacenEditModal";
import AlmacenDeleteModal from "../components/Almacenes/Modals/AlmacenDeleteModal";
import { getWarehouses } from "../actions/almacen";
import { getSucursals } from "../actions/sucursal";

const AlmacenesEditListPage = ({
  getWarehouses,
  getSucursals,
  almacen: { warehouses, loading },
  sucursal: { sucursals },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentAlmacen, setCurrentAlmacen] = useState(null);

  useEffect(() => {
    getWarehouses();
    getSucursals();
  }, [getWarehouses, getSucursals]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (almacen) => {
    setCurrentAlmacen(almacen);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentAlmacen(null);
  };

  const handleShowDeleteModal = (almacen) => {
    setCurrentAlmacen(almacen);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentAlmacen(null);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Lista de Almacenes" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Almacén
        </button>
      </div>
      <AlmacenList
        almacenes={warehouses}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />

      <AlmacenCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
        sucursales={sucursals}
      />
      <AlmacenEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        almacen={currentAlmacen}
        sucursales={sucursals}
      />
      <AlmacenDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        almacen={currentAlmacen}
      />
    </>
  );
};

AlmacenesEditListPage.propTypes = {
  getWarehouses: PropTypes.func.isRequired,
  getSucursals: PropTypes.func.isRequired,
  almacen: PropTypes.object.isRequired,
  sucursal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  almacen: state.almacen,
  sucursal: state.sucursal,
});

export default connect(mapStateToProps, { getWarehouses, getSucursals })(
  AlmacenesEditListPage
);
