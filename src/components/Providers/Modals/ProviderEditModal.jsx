import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderModal from "./ProviderModal";
import { updateProvider } from "../../../actions/provider";

const ProviderEditModal = ({ open, onClose, provider, updateProvider }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    encargado: "",
    contacto: "",
  });

  useEffect(() => {
    if (provider) {
      setFormData(provider);
    }
  }, [provider]);

  const { nombre, encargado, contacto } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProvider(provider.id, formData);
    onClose();
  };

  if (!open) return null;

  return (
    <ProviderModal open={open} onClose={onClose} title="Editar Proveedor">
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
          Guardar Cambios
        </button>
      </form>
    </ProviderModal>
  );
};

ProviderEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  provider: PropTypes.object,
  updateProvider: PropTypes.func.isRequired,
};

export default connect(null, { updateProvider })(ProviderEditModal);
