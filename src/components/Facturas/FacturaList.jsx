import React from "react";
import FacturaItem from "./FacturaItem";

const FacturaList = ({ facturas, onEdit, onDelete }) => {
  return (
    <div className="factura-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>NOMBRE</th>
                  <th>NIT</th>
                  <th>DIRECCIÓN</th>
                  <th>CORREO</th>
                  <th>IVA</th>
                  <th className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {facturas.map((factura) => (
                  <FacturaItem
                    key={factura.id}
                    factura={factura}
                    onEdit={() => onEdit(factura)}
                    onDelete={() => onDelete(factura)}
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

export default FacturaList;
