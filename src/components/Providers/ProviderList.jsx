import React from "react";
import ProviderItem from "./ProviderItem";

const ProviderList = ({ providers, onEdit, onDelete }) => {
  return (
    <div className="provider-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>NOMBRE</th>
                  <th>ENCARGADO</th>
                  <th>CONTACTO</th>
                  <th className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {providers.map((provider) => (
                  <ProviderItem
                    key={provider.id}
                    provider={provider}
                    onEdit={() => onEdit(provider)}
                    onDelete={() => onDelete(provider)}
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

export default ProviderList;
