import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ClientModal from "./ClientModal";

const ClientEditModal = ({ open, onClose, onSave, client }) => {
  const [formData, setFormData] = useState({
    ci: "",
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    genero: "",
    edad: "",
  });

  useEffect(() => {
    if (client) {
      setFormData({
        ci: client.ci,
        nombre: client.nombre,
        apellido: client.apellido,
        telefono: client.telefono,
        direccion: client.direccion,
        genero: client.genero,
        edad: client.edad,
      });
    }
  }, [client]);

  const { ci, nombre, apellido, telefono, direccion, genero, edad } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: client.id,
      ci: parseInt(ci),
      telefono: parseInt(telefono),
      edad: parseInt(edad),
    });
    onClose();
  };

  if (!open) return null;

  return (
    <ClientModal open={open} onClose={onClose} title="Editar Cliente">
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
          Guardar Cambios
        </button>
      </form>
    </ClientModal>
  );
};

ClientEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  client: PropTypes.object,
};

export default ClientEditModal;
