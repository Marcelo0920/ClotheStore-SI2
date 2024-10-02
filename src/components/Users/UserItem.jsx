import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="user-username" data-title="Username">
        <p>{user.username}</p>
      </td>
      <td className="user-email" data-title="Email">
        <p>{user.email}</p>
      </td>
      <td className="user-role" data-title="Rol">
        <span>{user.id_rol.nombre}</span>
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

export default UserItem;
