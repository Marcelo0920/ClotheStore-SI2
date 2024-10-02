import React from "react";

const CajaList = ({ cajas, onEdit, onDelete }) => {
  return (
    <div className="caja-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>ID</th>
                  <th>NÚMERO</th>
                  <th>SUCURSAL</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {cajas.map((caja) => (
                  <tr key={caja.id}>
                    <td>{caja.id}</td>
                    <td>{caja.numero}</td>
                    <td>{caja.id_sucursal.nombre}</td>
                    <td className="action">
                      <button
                        onClick={() => onEdit(caja)}
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
                        onClick={() => onDelete(caja)}
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

export default CajaList;
