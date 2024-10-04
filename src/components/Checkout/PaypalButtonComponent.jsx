import React, { useEffect, useRef } from "react";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your purchase description",
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          onSuccess(order);
        },
        onError: (err) => {
          console.error(err);
          onError(err);
        },
      })
      .render(paypal.current);
  }, [amount, onSuccess, onError]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPalButton;
