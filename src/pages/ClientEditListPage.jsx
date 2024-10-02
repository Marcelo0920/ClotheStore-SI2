import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import ClientCreateModal from "../components/Clients/Modals/ClientCreateModal";
import ClientEditModal from "../components/Clients/Modals/ClientEditModal";
import ClientDeleteModal from "../components/Clients/Modals/ClientDeleteModal";
import ClientList from "../components/Clients/ClientList";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../actions/client";

const ClientEditListPage = ({
  getClients,
  createClient,
  updateClient,
  deleteClient,
  client: { clients, loading },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);

  useEffect(() => {
    getClients();
  }, [getClients]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (client) => {
    setCurrentClient(client);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentClient(null);
  };

  const handleShowDeleteModal = (client) => {
    setCurrentClient(client);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentClient(null);
  };

  const handleSaveClient = (clientData) => {
    if (clientData.id) {
      updateClient(clientData.id, clientData);
    } else {
      createClient(clientData);
    }
    handleCloseCreateModal();
    handleCloseEditModal();
  };

  const handleDeleteClient = () => {
    if (currentClient) {
      deleteClient(currentClient.id);
      handleCloseDeleteModal();
    }
  };

  return (
    <>
      <ClientCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
        onSave={handleSaveClient}
      />
      <ClientEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        onSave={handleSaveClient}
        client={currentClient}
      />
      <ClientDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteClient}
        clientName={`${currentClient?.nombre} ${currentClient?.apellido}`}
      />
      <Header />
      <Breadcrumbs current="Client List" />
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
          Crear Cliente
        </button>
      </div>
      <ClientList
        clients={clients}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

ClientEditListPage.propTypes = {
  getClients: PropTypes.func.isRequired,
  createClient: PropTypes.func.isRequired,
  updateClient: PropTypes.func.isRequired,
  deleteClient: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps, {
  getClients,
  createClient,
  updateClient,
  deleteClient,
})(ClientEditListPage);
