import React from "react";
import { connect } from "react-redux";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { deletePedido } from "../../../actions/pedido";

const EliminarPedidoModal = ({ open, onClose, pedidoId, deletePedido }) => {
  const handleConfirm = () => {
    deletePedido(pedidoId);
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Eliminar Pedido">
      <p>¿Está seguro que desea eliminar el pedido #{pedidoId}?</p>
      <div className="modal-actions">
        <button
          onClick={onClose}
          className="btn"
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            marginRight: "10px",
          }}
        >
          Cancelar
        </button>
        <button
          onClick={handleConfirm}
          className="btn"
          style={{ backgroundColor: "#dc3545", color: "white" }}
        >
          Eliminar
        </button>
      </div>
    </ProviderModal>
  );
};

export default connect(null, { deletePedido })(EliminarPedidoModal);
