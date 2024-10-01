import React from "react";

const VentaItem = ({ venta, onDelete }) => {
  return (
    <tr>
      <td>{venta.id}</td>
      <td>{venta.fecha}</td>
      <td>{venta.id_cliente}</td>
      <td>${venta.total}</td>
      <td>${venta.descuento}</td>
      <td className="text-center">
        <button
          onClick={onDelete}
          className="btn"
          style={{
            backgroundColor: "red",
            color: "white",
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default VentaItem;
