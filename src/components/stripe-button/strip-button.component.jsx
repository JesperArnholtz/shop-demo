import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KIz8MF0shtEDO1AzGa2ldEDylrRVn55bGIqu4ABnPPXbtP451k4IkvfE2mhMWXkcaPl44gSjPD6TKtDz6wStUyA0027XXKdQd';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

    return(
        <StripeCheckout
            label="Pay now"
            name="Crwn clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/Cuz.svg"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;