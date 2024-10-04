import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FacturaModal from "../../Clients/Modals/ClientModal";
import { updateFactura } from "../../../actions/factura";

const FacturaEditModal = ({ open, onClose, factura, updateFactura }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    nit: "",
    direccion: "",
    correo: "",
    id_orden: "",
  });

  useEffect(() => {
    if (factura) {
      setFormData({
        nombre: factura.nombre || "",
        nit: factura.nit || "",
        direccion: factura.direccion || "",
        correo: factura.correo || "",
        id_orden: factura.id || "",
      });
    }
  }, [factura]);

  const { nombre, nit, direccion, correo, id_orden } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFactura(factura.id, formData);
    onClose();
  };

  if (!open) return null;

  return (
    <FacturaModal open={open} onClose={onClose} title="Editar Factura">
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Nombre"
            required
          />
          <input
            name="nit"
            value={nit}
            onChange={onChange}
            placeholder="NIT"
            required
          />
          <input
            name="direccion"
            value={direccion}
            onChange={onChange}
            placeholder="Dirección"
            required
          />
          <input
            name="correo"
            value={correo}
            onChange={onChange}
            placeholder="Correo"
            required
          />
          <input
            name="id_orden"
            value={id_orden}
            onChange={onChange}
            placeholder="id_orden"
            required
          />
        </div>
        <button type="submit" className="update-button">
          Guardar Cambios
        </button>
      </form>
    </FacturaModal>
  );
};

FacturaEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  factura: PropTypes.object,
  updateFactura: PropTypes.func.isRequired,
};

export default connect(null, { updateFactura })(FacturaEditModal);
