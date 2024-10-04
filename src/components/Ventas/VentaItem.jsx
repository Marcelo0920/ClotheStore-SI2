import React from "react";

const VentaItem = ({ id, fecha, cliente, total, descuento, onDelete }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{fecha}</td>
      <td>{cliente}</td>
      <td>{total}</td>
      <td>{descuento}</td>
      <td className="action" data-title="Acciones">
        <button
          onClick={() => onDelete(venta)}
          className="btn btn-danger"
          style={{
            backgroundColor: "#dc3545",
            borderColor: "#dc3545",
            color: "#fff",
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default VentaItem;
