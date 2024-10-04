import React from "react";
import VentaItem from "./VentaItem";

const VentasList = ({ ventas, onDelete }) => {
  return (
    <div className="ventas-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>ID</th>
                  <th>FECHA</th>
                  <th>CLIENTE</th>
                  <th>TOTAL</th>
                  <th>TOTAL DESPUES DE DESCUENTO</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {ventas.map((venta) => (
                  <VentaItem
                    key={venta.id}
                    id={venta.id}
                    fecha={venta.fecha}
                    cliente={venta.id_cliente.nombre}
                    total={venta.total}
                    descuento={venta.total_descuento}
                    onDelete={() => onDelete(venta)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentasList;
