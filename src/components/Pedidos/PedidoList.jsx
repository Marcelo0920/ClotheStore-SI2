import React from "react";

const PedidoList = ({ pedidos, onEdit, onDelete }) => {
  return (
    <div className="pedido-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>ID PEDIDO</th>
                  <th>ALMACÉN</th>
                  <th>PROVEEDOR</th>
                  <th>PRODUCTOS</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((pedido) => (
                  <tr key={pedido.id}>
                    <td>{pedido.id}</td>
                    <td>{pedido.id_almacen}</td>
                    <td>{pedido.id_proveedor}</td>
                    <td>{pedido.productos.length} productos</td>
                    <td className="action">
                      <button
                        onClick={() => onEdit(pedido)}
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
                        onClick={() => onDelete(pedido)}
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

export default PedidoList;
