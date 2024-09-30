import React, { useState, useEffect } from "react";

const ProviderEditModal = ({ open, onClose, onSave, provider }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="gameModalClose" onClick={onClose}>
          X
        </p>
        <div className="modal-content">
          <h3>Editar Proveedor</h3>
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
        </div>
      </div>
    </div>
  );
};

export default ProviderEditModal;
