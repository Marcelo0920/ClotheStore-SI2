import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripePaymentForm = ({ amount, onPaymentSuccess, onPaymentError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    // Create a PaymentMethod
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setIsProcessing(false);
      onPaymentError(error);
    } else {
      // Simulate a successful payment
      console.log("PaymentMethod created:", paymentMethod);
      setIsProcessing(false);
      onPaymentSuccess({
        id: paymentMethod.id,
        amount: amount,
        status: "succeeded",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <div style={{ color: "red" }}>{paymentError}</div>}
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
      </button>
    </form>
  );
};

export default StripePaymentForm;
