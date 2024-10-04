import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const OrderSummary = ({ cart: { items, total }, onSubmit }) => {
  const shippingCost = 10;
  const discountThreshold = 200;
  const discountRate = 0.05; // 5%

  const subtotal = total;
  const discountAmount =
    subtotal > discountThreshold ? subtotal * discountRate : 0;
  const grandTotal = subtotal + shippingCost - discountAmount;

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
        <div className="content">
          <div className="checkbox">
            <label className="checkbox-inline" htmlFor="2">
              <input name="news" id="2" type="checkbox" /> Efectivo
            </label>
            <label className="checkbox-inline" htmlFor="3">
              <input name="news" id="3" type="checkbox" /> PayPal
            </label>
          </div>
        </div>
      </div>
      <div className="single-widget payement">
        <div className="content">
          <img src="images/payment-method.png" alt="#" />
        </div>
      </div>
      <div className="single-widget get-button">
        <div className="content">
          <div className="button">
            <a style={{ cursor: "pointer" }} className="btn" onClick={onSubmit}>
              Realizar Venta
            </a>
          </div>
        </div>
      </div>
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
