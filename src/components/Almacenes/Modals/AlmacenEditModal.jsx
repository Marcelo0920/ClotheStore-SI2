import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { updateWarehouse } from "../../../actions/almacen";

const AlmacenEditModal = ({
  open,
  onClose,
  updateWarehouse,
  almacen,
  sucursales,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    numero: "",
    tipo: "",
    descripcion: "",
    id_sucursal: "",
  });

  useEffect(() => {
    if (almacen) {
      setFormData({
        ...almacen,
        id_sucursal: almacen.id_sucursal.id,
      });
    }
  }, [almacen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "numero" || name === "id_sucursal"
          ? parseInt(value, 10)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWarehouse(formData.id, formData);
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Editar Almacén">
      <form onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            type="number"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="Número del Almacén"
            required
          />
          <input
            type="text"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            placeholder="Tipo de Almacén"
            required
          />
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción del Almacén"
            required
          />
          <select
            name="id_sucursal"
            value={formData.id_sucursal}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una Sucursal</option>
            {sucursales.map((sucursal) => (
              <option key={sucursal.id} value={sucursal.id}>
                {sucursal.nombre}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          Guardar Cambios
        </button>
      </form>
    </ProviderModal>
  );
};

AlmacenEditModal.propTypes = {
  updateWarehouse: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  almacen: PropTypes.object,
  sucursales: PropTypes.array.isRequired,
};

export default connect(null, { updateWarehouse })(AlmacenEditModal);
