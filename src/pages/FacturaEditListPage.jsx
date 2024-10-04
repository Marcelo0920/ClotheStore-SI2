import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import FacturaEditModal from "../components/Facturas/Modals/FacturaEditModal";
import FacturaDeleteModal from "../components/Facturas/Modals/FacturaDeleteModal";
import FacturaList from "../components/Facturas/FacturaList";
import { getFacturas } from "../actions/factura";

const FacturaEditListPage = ({
  getFacturas,
  factura: { facturas, loading },
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentFactura, setCurrentFactura] = useState(null);

  useEffect(() => {
    getFacturas();
  }, [getFacturas]);

  const handleShowEditModal = (factura) => {
    setCurrentFactura(factura);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentFactura(null);
  };

  const handleShowDeleteModal = (factura) => {
    setCurrentFactura(factura);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentFactura(null);
  };

  return (
    <>
      <FacturaEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        factura={currentFactura}
      />
      <FacturaDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        factura={currentFactura}
      />
      <Header />
      <Breadcrumbs current="Factura List" />
      <FacturaList
        facturas={facturas}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

FacturaEditListPage.propTypes = {
  getFacturas: PropTypes.func.isRequired,
  factura: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  factura: state.factura,
});

export default connect(mapStateToProps, { getFacturas })(FacturaEditListPage);
