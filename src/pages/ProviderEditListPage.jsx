import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import ProviderCreateModal from "../components/Providers/Modals/ProviderCreateModal";
import ProviderEditModal from "../components/Providers/Modals/ProviderEditModal";
import ProviderDeleteModal from "../components/Providers/Modals/ProviderDeleteModal";
import ProviderList from "../components/Providers/ProviderList";
import { getProviders } from "../actions/provider";

const ProviderEditListPage = ({
  getProviders,
  provider: { providers, loading },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentProvider, setCurrentProvider] = useState(null);

  useEffect(() => {
    getProviders();
  }, [getProviders]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (provider) => {
    setCurrentProvider(provider);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentProvider(null);
  };

  const handleShowDeleteModal = (provider) => {
    setCurrentProvider(provider);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentProvider(null);
  };

  return (
    <>
      <ProviderCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
      />
      <ProviderEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        provider={currentProvider}
      />
      <ProviderDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        provider={currentProvider}
      />
      <Header />
      <Breadcrumbs current="Provider List" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{
            backgroundColor: "green",
            color: "white",
            marginRight: "10px",
          }}
        >
          Crear
        </button>
      </div>
      <ProviderList
        providers={providers}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

ProviderEditListPage.propTypes = {
  getProviders: PropTypes.func.isRequired,
  provider: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  provider: state.provider,
});

export default connect(mapStateToProps, { getProviders })(ProviderEditListPage);
