import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const OrderSummary = ({
  cart: { items, total },
  onSubmit,
  onPaymentMethodSelect,
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const shippingCost = 10;
  const discountThreshold = 200;
  const discountRate = 0.05; // 5%

  const subtotal = total;
  const discountAmount =
    subtotal > discountThreshold ? subtotal * discountRate : 0;
  const grandTotal = subtotal + shippingCost - discountAmount;

  const handlePaymentMethodChange = (e) => {
    const methodId = parseInt(e.target.value);
    setSelectedPaymentMethod(methodId);
    onPaymentMethodSelect(methodId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPaymentMethod) {
      onSubmit(selectedPaymentMethod, discountAmount);
    } else {
      alert("Please select a payment method");
    }
  };

  return (
    <div className="order-details">
      <div className="single-widget">
        <h2>TOTAL CARRITO</h2>
        <div className="content">
          <ul>
            <li>
              Sub Total<span>${subtotal.toFixed(2)}</span>
            </li>
            <li>
              (+) Envio<span>${shippingCost.toFixed(2)}</span>
            </li>
            <li>
              (-) Descuento<span>${discountAmount.toFixed(2)}</span>
            </li>
            <li className="last">
              Total<span>${grandTotal.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="single-widget">
        <h2>Pago</h2>
        <div className="content" style={{ marginLeft: "30px" }}>
          <div className="radio">
            <label className="radio-inline" htmlFor="payment-method-1">
              <input
                type="radio"
                id="payment-method-1"
                name="paymentMethod"
                value="1"
                checked={selectedPaymentMethod === 1}
                onChange={handlePaymentMethodChange}
              />{" "}
              Efectivo
            </label>
          </div>
          <div className="radio">
            <label className="radio-inline" htmlFor="payment-method-2">
              <input
                type="radio"
                id="payment-method-2"
                name="paymentMethod"
                value="2"
                checked={selectedPaymentMethod === 2}
                onChange={handlePaymentMethodChange}
              />{" "}
              PayPal
            </label>
          </div>
        </div>
      </div>
      {selectedPaymentMethod !== 2 && (
        <div className="single-widget get-button">
          <div className="content">
            <div className="button">
              <a
                href="#"
                style={{ cursor: "pointer" }}
                className="btn"
                onClick={handleSubmit}
              >
                Realizar Venta
              </a>
            </div>
          </div>
        </div>
      )}

      {discountAmount > 0 && (
        <div className="single-widget">
          <div className="content">
            <p>
              ¡Felicidades! Has obtenido un descuento del 5% por compras mayores
              a $200.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

OrderSummary.propTypes = {
  cart: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(OrderSummary);
