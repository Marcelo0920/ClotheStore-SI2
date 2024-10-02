import React, { useState } from "react";
import PropTypes from "prop-types";
import ClientModal from "./ClientModal";

const ClientCreateModal = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    ci: "",
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    genero: "",
    edad: "",
  });

  const { ci, nombre, apellido, telefono, direccion, genero, edad } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      ci: parseInt(ci),
      telefono: parseInt(telefono),
      edad: parseInt(edad),
    });
    onClose();
  };

  return (
    <ClientModal open={open} onClose={onClose} title="Crear Cliente">
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            name="ci"
            value={ci}
            onChange={onChange}
            placeholder="CI"
            type="number"
            required
          />
          <input
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Nombre"
            required
          />
          <input
            name="apellido"
            value={apellido}
            onChange={onChange}
            placeholder="Apellido"
            required
          />
          <input
            name="telefono"
            value={telefono}
            onChange={onChange}
            placeholder="Teléfono"
            type="number"
            required
          />
          <input
            name="direccion"
            value={direccion}
            onChange={onChange}
            placeholder="Dirección"
            required
          />
          <select name="genero" value={genero} onChange={onChange} required>
            <option value="">Seleccionar Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
          <input
            name="edad"
            value={edad}
            onChange={onChange}
            placeholder="Edad"
            type="number"
            required
          />
        </div>
        <button type="submit" className="create-button">
          Crear
        </button>
      </form>
    </ClientModal>
  );
};

ClientCreateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ClientCreateModal;
