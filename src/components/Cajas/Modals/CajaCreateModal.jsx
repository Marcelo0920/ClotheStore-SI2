import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { createCaja } from "../../../actions/caja";

const CajaCreateModal = ({ open, onClose, createCaja, sucursales }) => {
  const [formData, setFormData] = useState({
    numero: "",
    id_sucursal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCaja(formData);
    setFormData({ numero: "", id_sucursal: "" });
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Caja">
      <form onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            type="number"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="Número de Caja"
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
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Caja
        </button>
      </form>
    </ProviderModal>
  );
};

CajaCreateModal.propTypes = {
  createCaja: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  sucursales: PropTypes.array.isRequired,
};

export default connect(null, { createCaja })(CajaCreateModal);
