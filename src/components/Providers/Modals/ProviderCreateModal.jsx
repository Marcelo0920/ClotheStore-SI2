import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "./ProviderModal";
import { createProvider } from "../../../actions/provider";

const ProviderCreateModal = ({ open, onClose, createProvider }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    encargado: "",
    contacto: "",
  });

  const { nombre, encargado, contacto } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProvider(formData);
    setFormData({ nombre: "", encargado: "", contacto: "" });
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Proveedor">
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Nombre Proveedor"
            required
          />
          <input
            name="encargado"
            value={encargado}
            onChange={onChange}
            placeholder="Encargado"
            required
          />
          <input
            name="contacto"
            value={contacto}
            onChange={onChange}
            placeholder="Contacto"
            required
          />
        </div>
        <button type="submit" className="create-button">
          Crear
        </button>
      </form>
    </ProviderModal>
  );
};

ProviderCreateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  createProvider: PropTypes.func.isRequired,
};

export default connect(null, { createProvider })(ProviderCreateModal);
