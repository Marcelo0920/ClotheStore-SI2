import React from "react";

const FacturaItem = ({ factura, onEdit, onDelete }) => {
  console.log(factura);
  return (
    <tr key={factura.id}>
      <td className="factura-nombre" data-title="Nombre">
        <p>{factura.nombre}</p>
      </td>
      <td className="factura-nit" data-title="NIT">
        <p>{factura.nit}</p>
      </td>
      <td className="factura-direccion" data-title="Dirección">
        <p>{factura.direccion}</p>
      </td>
      <td className="factura-correo" data-title="Correo">
        <p>{factura.correo}</p>
      </td>
      <td className="factura-iva" data-title="IVA">
        <p>{factura.iva}</p>
      </td>
      <td className="action" data-title="Actions">
        <button
          onClick={() => onEdit(factura.id)}
          className="btn"
          style={{
            marginRight: "10px",
            backgroundColor: "#ffc107",
            borderColor: "#ffc107",
            color: "#fff",
          }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(factura.id)}
          className="btn btn-danger"
          style={{
            backgroundColor: "#dc3545",
            borderColor: "#dc3545",
            color: "#fff",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default FacturaItem;
