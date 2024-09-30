import React, { useState, useEffect } from "react";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const CajaEditModal = ({ open, onClose, onSave, caja, sucursales }) => {
  const [formData, setFormData] = useState({
    id: "",
    numero: "",
    id_sucursal: "",
  });

  useEffect(() => {
    if (caja) {
      setFormData({
        id: caja.id,
        numero: caja.numero,
        id_sucursal: caja.id_sucursal.id,
      });
    }
  }, [caja]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Editar Caja">
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
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          Guardar Cambios
        </button>
      </form>
    </ProviderModal>
  );
};

export default CajaEditModal;
