import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component{
    render(){
        debugger;
        return(
            <StripeCheckout
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.stripeKey}
            />
        );
    }
}

export default Payments;