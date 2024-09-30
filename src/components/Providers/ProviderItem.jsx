import React from "react";

const ProviderItem = ({ provider, onEdit, onDelete }) => {
  return (
    <tr key={provider.id}>
      <td className="provider-name" data-title="Nombre">
        <p>{provider.nombre}</p>
      </td>
      <td className="provider-manager" data-title="Encargado">
        <p>{provider.encargado}</p>
      </td>
      <td className="provider-contact" data-title="Contacto">
        <span>{provider.contacto}</span>
      </td>
      <td className="action" data-title="Actions">
        <button
          onClick={() => onEdit(provider.id)}
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
          onClick={() => onDelete(provider.id)}
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

export default ProviderItem;
