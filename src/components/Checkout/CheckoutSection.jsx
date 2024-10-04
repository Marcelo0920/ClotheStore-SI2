import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import { createOrden } from "../../actions/venta";
import { clearCart } from "../../actions/cart";
import PayPalButton from "./PaypalButtonComponent";

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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZNZYO8ALgxNm1S9x8CAewvV_ePpRbwKXDLVQxSwk75kUtIBVuaVjlCogc78fztU4Nmbg_agZHWgvZ3R&currency=USD";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedPaymentMethod(methodId);
  };

  const handleSubmit = async (paymentMethodId, discountAmount) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const orderData = {
        descuento: discountAmount.toString(),
        id_cliente: "1",
        id_metodo_pago: paymentMethodId.toString(),
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
      alert("Venta realizada con éxito");
    } catch (error) {
      console.error("Error al realizar la venta:", error);
      setError("Error al realizar la venta. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePayPalSuccess = async (details) => {
    console.log("PayPal payment successful:", details);
    await handleSubmit(2, 0); // Assuming PayPal is payment method 2
  };

  const handlePayPalError = (error) => {
    console.error("PayPal payment error:", error);
    setError("Error processing PayPal payment. Please try again.");
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
              onPaymentMethodSelect={handlePaymentMethodSelect}
            />
            {selectedPaymentMethod === 2 && (
              <PayPalButton
                amount={total}
                onSuccess={handlePayPalSuccess}
                onError={handlePayPalError}
              />
            )}
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
