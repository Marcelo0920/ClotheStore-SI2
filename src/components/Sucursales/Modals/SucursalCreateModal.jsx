import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "../../Providers/Modals/ProviderModal";
import { createSucursal } from "../../../actions/sucursal";

const SucursalCreateModal = ({ open, onClose, createSucursal }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
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
    createSucursal(formData);
    setFormData({ nombre: "", direccion: "" });
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Sucursal">
      <form onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre de la Sucursal"
            required
          />
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección de la Sucursal"
            required
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Sucursal
        </button>
      </form>
    </ProviderModal>
  );
};

SucursalCreateModal.propTypes = {
  createSucursal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default connect(null, { createSucursal })(SucursalCreateModal);
