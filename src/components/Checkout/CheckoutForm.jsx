import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createFactura } from "../../actions/factura";
import jsPDF from "jspdf";

const CheckoutForm = ({ createFactura, venta: { orden } }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    nit: "",
    direccion: "",
    correo: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [facturaData, setFacturaData] = useState(null);

  const { nombre, nit, direccion, correo } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const facturaData = {
      ...formData,
      id_orden: orden,
    };
    try {
      const factura = await createFactura(facturaData);
      setFacturaData(factura);
      setSuccessMessage("Factura generada con éxito");
      setFormData({ nombre: "", nit: "", direccion: "", correo: "" });
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error al generar la factura:", error);
      setSuccessMessage("");
    }
  };

  const generatePDF = () => {
    if (!facturaData) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Factura", 105, 20, null, null, "center");
    doc.setFontSize(12);

    // Add factura details
    doc.text(`ID: ${facturaData.id}`, 20, 40);
    doc.text(`Nombre: ${facturaData.nombre}`, 20, 50);
    doc.text(`NIT: ${facturaData.nit}`, 20, 60);
    doc.text(`Dirección: ${facturaData.direccion}`, 20, 70);
    doc.text(`Correo: ${facturaData.correo}`, 20, 80);
    doc.text(`IVA: ${facturaData.iva}`, 20, 90);

    // Add orden details
    doc.text("Detalles de la Orden", 20, 110);
    doc.text(`Número de Orden: ${facturaData.id_orden.numero_orden}`, 20, 120);
    doc.text(`Total: ${facturaData.id_orden.total}`, 20, 130);
    doc.text(`Descuento: ${facturaData.id_orden.descuento}`, 20, 140);
    doc.text(
      `Total con Descuento: ${facturaData.id_orden.total_descuento}`,
      20,
      150
    );
    doc.text(`Fecha: ${facturaData.id_orden.fecha}`, 20, 160);
    doc.text(`Hora: ${facturaData.id_orden.hora}`, 20, 170);

    // Add cliente details
    doc.text("Detalles del Cliente", 20, 190);
    doc.text(
      `Nombre: ${facturaData.id_orden.id_cliente.nombre} ${facturaData.id_orden.id_cliente.apellido}`,
      20,
      200
    );
    doc.text(`CI: ${facturaData.id_orden.id_cliente.ci}`, 20, 210);
    doc.text(`Teléfono: ${facturaData.id_orden.id_cliente.telefono}`, 20, 220);

    // Save the PDF
    doc.save("factura.pdf");
  };

  return (
    <div className="checkout-form">
      <h2>Generar Factura</h2>
      <p>Por favor llene el formulario de factura</p>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
          {facturaData && (
            <button onClick={generatePDF} className="btn btn-primary ml-3">
              Descargar Factura PDF
            </button>
          )}
        </div>
      )}
      <form className="form" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>
                Nombre Completo<span>*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label>
                NIT<span>*</span>
              </label>
              <input
                type="number"
                name="nit"
                value={nit}
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label>
                Dirección<span>*</span>
              </label>
              <input
                type="text"
                name="direccion"
                value={direccion}
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label>
                Correo Electrónico<span>*</span>
              </label>
              <input
                type="email"
                name="correo"
                value={correo}
                onChange={onChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group button">
            <button type="submit" className="btn">
              Generar Factura
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

CheckoutForm.propTypes = {
  createFactura: PropTypes.func.isRequired,
  venta: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  venta: state.venta,
});

export default connect(mapStateToProps, { createFactura })(CheckoutForm);
