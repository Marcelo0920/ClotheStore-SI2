import React from "react";
import CajaItem from "./CajaItem";

const CajasAperturaList = ({ cajas, onAperturar, onCerrar, onArquear }) => {
  return (
    <div className="caja-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>NOMBRE</th>
                  <th>SUCURSAL</th>
                  <th>ESTADO</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {cajas.map((caja) => (
                  <CajaItem
                    key={caja.id}
                    caja={caja}
                    onAperturar={onAperturar}
                    onCerrar={onCerrar}
                    onArquear={onArquear}
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

export default CajasAperturaList;
