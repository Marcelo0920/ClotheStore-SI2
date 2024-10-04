import React from "react";
import { connect } from "react-redux";

const PedidoList = ({ pedidos, onEdit, onDelete, warehouses, providers }) => {
  const getWarehouseName = (id) => {
    const warehouse = warehouses.find((w) => w.id === id);
    return warehouse ? warehouse.nombre : "Unknown";
  };

  const getProviderName = (id) => {
    const provider = providers.find((p) => p.id === id);
    return provider ? provider.nombre : "Unknown";
  };

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
              <tbody className="text-center">
                {pedidos.map((pedido) => (
                  <tr key={pedido.id}>
                    <td>{pedido.id}</td>
                    <td>{pedido.id_almacen?.tipo}</td>
                    <td>{pedido.id_proveedor?.nombre}</td>

                    <td> productos</td>
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

const mapStateToProps = (state) => ({
  warehouses: state.almacen.warehouses,
  providers: state.provider.providers,
});

export default connect(mapStateToProps)(PedidoList);
