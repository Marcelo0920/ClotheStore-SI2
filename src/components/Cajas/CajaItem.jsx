import React from "react";
import PropTypes from "prop-types";

const CajaItem = ({ caja, onAperturar, onCerrar, onArquear }) => {
  return (
    <tr>
      <td>{caja.numero}</td>
      <td>{caja.id_sucursal.nombre}</td>
      <td>{caja.estado}</td>
      <td className="text-center">
        <button
          onClick={() => onAperturar(caja.id)}
          disabled={caja.estado === "Abierta"}
          className="btn"
          style={{
            backgroundColor: "green",
            color: "white",
            marginRight: "10px",
          }}
        >
          Aperturar
        </button>
        <button
          onClick={() => onCerrar(caja.id)}
          disabled={caja.estado === "Cerrada"}
          className="btn"
          style={{
            backgroundColor: "red",
            color: "white",
            marginRight: "10px",
          }}
        >
          Cerrar
        </button>
        <button
          onClick={() => onArquear(caja.id)}
          className="btn"
          style={{
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Arquear
        </button>
      </td>
    </tr>
  );
};

CajaItem.propTypes = {
  caja: PropTypes.object.isRequired,
  onAperturar: PropTypes.func.isRequired,
  onCerrar: PropTypes.func.isRequired,
  onArquear: PropTypes.func.isRequired,
};

export default CajaItem;
