import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_LMWa5q9tUrZHiya9rnIJdpJa001HhHcV1k';

    const onToken = token =>{
        console.log(token);
        alert('payment successfull');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name = 'WomenzSareeShowroom'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is ${price} rupeess`}
        amount={priceForStripe}
        panelLabel= 'pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;