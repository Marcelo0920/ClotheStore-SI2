import React from "react";

const CategoryList = ({ categories, onEdit, onDelete }) => {
  return (
    <div className="category-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCIÓN</th>
                  <th className="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.nombre}</td>
                    <td>{category.descripcion}</td>
                    <td className="action">
                      <button
                        onClick={() => onEdit(category)}
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
                        onClick={() => onDelete(category)}
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

export default CategoryList;
