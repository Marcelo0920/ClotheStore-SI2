import React from "react";
import ClientItem from "./ClientItem";

const ClientList = ({ clients, onEdit, onDelete }) => {
  return (
    <div className="client-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>CI</th>
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>TELÉFONO</th>
                  <th>DIRECCIÓN</th>
                  <th>GÉNERO</th>
                  <th>EDAD</th>
                  <th className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {clients.map((client) => (
                  <ClientItem
                    key={client.id}
                    client={client}
                    onEdit={() => onEdit(client)}
                    onDelete={() => onDelete(client)}
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

export default ClientList;
