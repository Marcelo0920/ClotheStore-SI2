import React, { useState } from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import ProviderCreateModal from "../components/Providers/Modals/ProviderCreateModal";
import ProviderEditModal from "../components/Providers/Modals/ProviderEditModal";
import ProviderDeleteModal from "../components/Providers/Modals/ProviderDeleteModal";
import ProviderList from "../components/Providers/ProviderList";

const ProviderEditListPage = () => {
  const [providers, setProviders] = useState([
    {
      id: 1,
      nombre: "sport",
      encargado: "romero",
      contacto: "123123",
    },
    {
      id: 2,
      nombre: "XYZ Distribution",
      encargado: "Jane Smith",
      contacto: "456456",
    },
    {
      id: 3,
      nombre: "123 Wholesalers",
      encargado: "Bob Johnson",
      contacto: "789789",
    },
  ]);

  const warehouses = [
    { id: 1, nombre: "Almacén Central" },
    { id: 2, nombre: "Almacén Norte" },
    // ... more warehouses
  ];

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentProvider, setCurrentProvider] = useState(null);
  const [showCrearPedidoModal, setShowCrearPedidoModal] = useState(false);

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

  const handleSaveProvider = (providerData) => {
    if (providerData.id) {
      setProviders(
        providers.map((p) => (p.id === providerData.id ? providerData : p))
      );
    } else {
      const newProvider = {
        ...providerData,
        id: Date.now(),
      };
      setProviders([...providers, newProvider]);
    }
    handleCloseCreateModal();
    handleCloseEditModal();
  };

  const handleDeleteProvider = () => {
    setProviders(providers.filter((p) => p.id !== currentProvider.id));
    handleCloseDeleteModal();
  };

  return (
    <>
      <ProviderCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
        onSave={handleSaveProvider}
      />
      <ProviderEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        onSave={handleSaveProvider}
        provider={currentProvider}
      />
      <ProviderDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteProvider}
        providerName={currentProvider?.nombre}
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

export default ProviderEditListPage;
