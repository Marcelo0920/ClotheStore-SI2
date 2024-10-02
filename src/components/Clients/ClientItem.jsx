import React from "react";

const ClientItem = ({ client, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="client-ci" data-title="CI">
        <p>{client.ci}</p>
      </td>
      <td className="client-nombre" data-title="Nombre">
        <p>{client.nombre}</p>
      </td>
      <td className="client-apellido" data-title="Apellido">
        <p>{client.apellido}</p>
      </td>
      <td className="client-telefono" data-title="Teléfono">
        <p>{client.telefono}</p>
      </td>
      <td className="client-direccion" data-title="Dirección">
        <p>{client.direccion}</p>
      </td>
      <td className="client-genero" data-title="Género">
        <p>{client.genero}</p>
      </td>
      <td className="client-edad" data-title="Edad">
        <p>{client.edad}</p>
      </td>
      <td className="action" data-title="Actions">
        <button
          onClick={onEdit}
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
          onClick={onDelete}
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

export default ClientItem;
