import React from "react";

const AlmacenList = ({ almacenes, onEdit, onDelete }) => {
  return (
    <div className="almacen-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>ID</th>
                  <th>NÚMERO</th>
                  <th>TIPO</th>
                  <th>DESCRIPCIÓN</th>
                  <th>SUCURSAL</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {almacenes.map((almacen) => (
                  <tr key={almacen.id}>
                    <td>{almacen.id}</td>
                    <td>{almacen.numero}</td>
                    <td>{almacen.tipo}</td>
                    <td>{almacen.descripcion}</td>
                    <td>{almacen.id_sucursal.nombre}</td>
                    <td className="action">
                      <button
                        onClick={() => onEdit(almacen)}
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
                        onClick={() => onDelete(almacen)}
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

export default AlmacenList;
