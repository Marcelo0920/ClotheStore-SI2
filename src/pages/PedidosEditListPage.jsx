import React, { useState } from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import CrearPedidoModal from "../components/Pedidos/modals/CreatePedido";
import EliminarPedidoModal from "../components/Pedidos/modals/EliminarPedidoModal";
import PedidoEditModal from "../components/Pedidos/modals/PedidoEditModal";
import PedidoList from "../components/Pedidos/PedidoList";

const PedidosEditListPage = () => {
  const [pedidos, setPedidos] = useState([
    // Mock data, replace with actual data source
    {
      id: 1,
      id_almacen: 1,
      id_proveedor: 1,
      productos: [{ id_producto: 1, cantidad: 10 }],
    },
    {
      id: 2,
      id_almacen: 2,
      id_proveedor: 2,
      productos: [{ id_producto: 2, cantidad: 5 }],
    },
  ]);

  const [showCrearModal, setShowCrearModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [showEliminarModal, setShowEliminarModal] = useState(false);
  const [currentPedido, setCurrentPedido] = useState(null);

  // Mock data for providers and warehouses, replace with actual data source
  const providers = [
    { id: 1, nombre: "Proveedor 1" },
    { id: 2, nombre: "Proveedor 2" },
  ];

  const warehouses = [
    { id: 1, nombre: "Almacén Central" },
    { id: 2, nombre: "Almacén Norte" },
  ];

  const handleShowCrearModal = () => setShowCrearModal(true);
  const handleCloseCrearModal = () => setShowCrearModal(false);

  const handleShowEditarModal = (pedido) => {
    setCurrentPedido(pedido);
    setShowEditarModal(true);
  };
  const handleCloseEditarModal = () => {
    setShowEditarModal(false);
    setCurrentPedido(null);
  };

  const handleShowEliminarModal = (pedido) => {
    setCurrentPedido(pedido);
    setShowEliminarModal(true);
  };
  const handleCloseEliminarModal = () => {
    setShowEliminarModal(false);
    setCurrentPedido(null);
  };

  const handleSavePedido = (pedidoData) => {
    if (pedidoData.id) {
      setPedidos(pedidos.map((p) => (p.id === pedidoData.id ? pedidoData : p)));
    } else {
      const newPedido = {
        ...pedidoData,
        id: Date.now(), // This is a simple way to generate a unique id. In a real app, this would typically be done by the backend.
      };
      setPedidos([...pedidos, newPedido]);
    }
    handleCloseCrearModal();
    handleCloseEditarModal();
  };

  const handleDeletePedido = () => {
    setPedidos(pedidos.filter((p) => p.id !== currentPedido.id));
    handleCloseEliminarModal();
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Lista de Pedidos" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCrearModal}
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Pedido
        </button>
      </div>
      <PedidoList
        pedidos={pedidos}
        onEdit={handleShowEditarModal}
        onDelete={handleShowEliminarModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />

      <CrearPedidoModal
        open={showCrearModal}
        onClose={handleCloseCrearModal}
        onSave={handleSavePedido}
        providers={providers}
        warehouses={warehouses}
      />
      <PedidoEditModal
        open={showEditarModal}
        onClose={handleCloseEditarModal}
        onSave={handleSavePedido}
        pedido={currentPedido}
        providers={providers}
        warehouses={warehouses}
      />
      <EliminarPedidoModal
        open={showEliminarModal}
        onClose={handleCloseEliminarModal}
        onConfirm={handleDeletePedido}
        pedidoId={currentPedido?.id}
      />
    </>
  );
};

export default PedidosEditListPage;
