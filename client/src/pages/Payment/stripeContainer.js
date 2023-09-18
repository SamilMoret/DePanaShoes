import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentFor';

const PUBLIC_KEY="pk_test_51Nm2bhAPurscdt1qmht3wTlBhmVh7xlugFjc1wMdoAMEBg3fGBRjJ0GfIDxgJL01GlHXX4VJHmGajOTO7VfrOvYV00rwWiPZwN"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}