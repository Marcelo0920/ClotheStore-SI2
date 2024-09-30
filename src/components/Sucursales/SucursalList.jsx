import React from "react";

const SucursalList = ({ sucursales, onEdit, onDelete }) => {
  return (
    <div className="sucursal-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>DIRECCIÓN</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {sucursales.map((sucursal) => (
                  <tr key={sucursal.id}>
                    <td>{sucursal.id}</td>
                    <td>{sucursal.nombre}</td>
                    <td>{sucursal.direccion}</td>
                    <td className="action">
                      <button
                        onClick={() => onEdit(sucursal)}
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
                        onClick={() => onDelete(sucursal)}
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

export default SucursalList;
