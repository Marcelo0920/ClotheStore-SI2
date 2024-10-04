import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import CrearPedidoModal from "../components/Pedidos/modals/CreatePedido";
import EliminarPedidoModal from "../components/Pedidos/modals/EliminarPedidoModal";
import PedidoEditModal from "../components/Pedidos/modals/PedidoEditModal";
import PedidoList from "../components/Pedidos/PedidoList";

import { getPedidos } from "../actions/pedido";
import { getProviders } from "../actions/provider";
import { getWarehouses } from "../actions/almacen";

const PedidosEditListPage = ({
  getPedidos,
  getProviders,
  getWarehouses,
  pedido: { pedidos },
  provider: { providers },
  almacen: { warehouses },
}) => {
  const [showCrearModal, setShowCrearModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [showEliminarModal, setShowEliminarModal] = useState(false);
  const [currentPedido, setCurrentPedido] = useState(null);

  useEffect(() => {
    getPedidos();
    getProviders();
    getWarehouses();
  }, [getPedidos, getProviders, getWarehouses]);

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
        providers={providers}
        warehouses={warehouses}
      />
      <PedidoEditModal
        open={showEditarModal}
        onClose={handleCloseEditarModal}
        pedido={currentPedido}
        providers={providers}
        warehouses={warehouses}
      />
      <EliminarPedidoModal
        open={showEliminarModal}
        onClose={handleCloseEliminarModal}
        pedidoId={currentPedido?.id}
      />
    </>
  );
};

PedidosEditListPage.propTypes = {
  getWarehouses: PropTypes.func.isRequired,
  getPedidos: PropTypes.func.isRequired,
  getProviders: PropTypes.func.isRequired,
  almacen: PropTypes.object.isRequired,
  pedido: PropTypes.object.isRequired,
  provider: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  pedido: state.pedido,
  provider: state.provider,
  almacen: state.almacen,
});

export default connect(mapStateToProps, {
  getPedidos,
  getProviders,
  getWarehouses,
})(PedidosEditListPage);
