import React from "react";

const RoleList = ({ roles, onEdit, onDelete }) => {
  return (
    <div className="role-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id}>
                    <td>{role.id}</td>
                    <td>{role.nombre}</td>
                    <td className="action">
                      <button
                        onClick={() => onEdit(role)}
                        className="btn"
                        style={{
                          backgroundColor: "#ffc107",
                          color: "white",
                          marginRight: "5px",
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => onDelete(role)}
                        className="btn"
                        style={{ backgroundColor: "#dc3545", color: "white" }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleList;
