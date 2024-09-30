import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const CheckoutSection = () => {
  return (
    <section className="shop checkout section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <CheckoutForm />
          </div>
          <div className="col-lg-4 col-12">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
