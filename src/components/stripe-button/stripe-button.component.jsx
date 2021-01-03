import React from 'react'
import StripeCheckout from  'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I5X2cGzKgmsHfif9z7OpDPvfXy0z9h23xoa6D5DWTuNPfeYowx88eA23PYfAWH3pw6h8m4yDatzTIk8wLEpaDVS00yzlg4uh8';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;