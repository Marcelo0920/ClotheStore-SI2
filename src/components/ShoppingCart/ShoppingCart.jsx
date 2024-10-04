import React from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
} from "../../actions/cart";
import { Link } from "react-router-dom";

const ShoppingCart = ({
  cartItems,
  total,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
}) => {
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const getImageSource = (foto) => {
    if (typeof foto === "string") {
      return `data:image/jpeg;base64,${foto}`;
    } else if (foto instanceof ArrayBuffer) {
      return `data:image/jpeg;base64,${arrayBufferToBase64(foto)}`;
    } else if (Array.isArray(foto)) {
      const uint8Array = new Uint8Array(foto);
      return `data:image/jpeg;base64,${arrayBufferToBase64(uint8Array.buffer)}`;
    }
    return null;
  };

  return (
    <div className="shopping-cart section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>PRODUCT</th>
                  <th>NAME</th>
                  <th className="text-center">UNIT PRICE</th>
                  <th className="text-center">QUANTITY</th>
                  <th className="text-center">TOTAL</th>
                  <th className="text-center">
                    <i className="ti-trash remove-icon"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="image" data-title="No">
                      <img
                        src={
                          getImageSource(item.foto) ||
                          "https://via.placeholder.com/100x100"
                        }
                        alt={item.nombre}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td className="product-des" data-title="Description">
                      <p className="product-name">
                        <a href="#">{item.nombre}</a>
                      </p>
                      <p className="product-des">{item.descripcion}</p>
                    </td>
                    <td className="price" data-title="Price">
                      <span>${item.precio.toFixed(2)} </span>
                    </td>
                    <td className="qty" data-title="Qty">
                      <div className="input-group">
                        <div className="button minus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            disabled={item.quantity === 1}
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                          >
                            <i className="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name={`quant[${item.id}]`}
                          className="input-number"
                          data-min="1"
                          data-max="100"
                          value={item.quantity}
                          readOnly
                        />
                        <div className="button plus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            <i className="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="total-amount" data-title="Total">
                      <span>${(item.precio * item.quantity).toFixed(2)}</span>
                    </td>
                    <td className="action" data-title="Remove">
                      <a href="#" onClick={() => handleRemoveItem(item.id)}>
                        <i className="ti-trash remove-icon"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="total-amount">
              <div className="row">
                <div className="col-lg-8 col-md-5 col-12">
                  <div className="left">
                    <div className="coupon">
                      <form action="#" target="_blank">
                        <input name="Coupon" placeholder="Ingresa tu cupon" />
                        <button className="btn">Aplicar</button>
                      </form>
                    </div>
                    <div className="checkbox">
                      <label className="checkbox-inline" htmlFor="2">
                        <input name="news" id="2" type="checkbox" /> Envio
                        (+10$)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-7 col-12">
                  <div className="right">
                    <ul>
                      <li>
                        Total Carrito<span>${total.toFixed(2)}</span>
                      </li>
                      <li>
                        Envio<span>Gratuito</span>
                      </li>
                      <li>
                        Ahorras<span>$0.00</span>
                      </li>
                      <li className="last">
                        Pagas<span>${total.toFixed(2)}</span>
                      </li>
                    </ul>
                    <div className="button5">
                      <Link to="/checkout" className="btn">
                        Checkout
                      </Link>
                      <a className="btn" onClick={() => clearCart()}>
                        Limpiar Carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  total: state.cart.total,
});

export default connect(mapStateToProps, {
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
})(ShoppingCart);
