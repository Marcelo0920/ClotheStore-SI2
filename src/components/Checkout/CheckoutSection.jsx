import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import { createOrden } from "../../actions/venta";
import { clearCart } from "../../actions/cart";

const CheckoutSection = ({
  cart: { items, total },
  createOrden,
  clearCart,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const orderData = {
        descuento: "0",
        id_cliente: "1",
        id_metodo_pago: "1",
        id_usuario: "1",
        lista_ordenes: items.map((item) => ({
          id_producto: item.id,
          cantidad: item.quantity,
        })),
      };

      console.log("Submitting order with data:", orderData);

      const createdOrder = await createOrden(orderData);
      console.log("Order created successfully:", createdOrder);

      clearCart();
      // Add success message or redirect logic here
      alert("Venta realizada con exito"); // Replace with a more user-friendly notification
    } catch (error) {
      console.error("Error al realizar la venta:", error);
      setError("Error al realizar la venta. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="shop checkout section">
      <div className="container">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          <div className="col-lg-8 col-12">
            <CheckoutForm formData={formData} onChange={handleInputChange} />
          </div>
          <div className="col-lg-4 col-12">
            <OrderSummary
              cart={items}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CheckoutSection.propTypes = {
  cart: PropTypes.object.isRequired,
  createOrden: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { createOrden, clearCart })(
  CheckoutSection
);
