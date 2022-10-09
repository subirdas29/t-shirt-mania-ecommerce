import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveToCart}) => {

    // 1.
    let message;
    if( cart.length ===0)
    {
        message = 'please buy a tshirt'
    }
    else if( cart.length ===1)
    {
        message = 'please buy one more'
    }
    else{
        message = 'Buy More'
    }

    return (
        <div>
            <h3 className={cart.length===2 ? `orange`: `green`}>Order Summary:{cart.length}</h3>
            <h3 className={`bold ${cart.length===3 ? `blue`: `yellow`}`}>Order quantity:{cart.length}</h3>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveToCart(tshirt)}>X</button>
                </p>
                )
            }
            {
                message
            }
            {
                // 2.
            cart.length === 2 ? <p>you buy only two tshirt</p>:<p>buy more shirt </p>
            }
            {
                cart.length ===3 && <p>you buy three shirt</p>
            }
            {
                cart.length ===4 || <p>please buy four shirt</p>
            }
        </div>
       
)};
/*
// Conditional Rendering
// 1. use element in a variable and then use if-else to set value.
2. ternary operation conditon ? true:false
3. && operator (if condition is true, i want to display something)
4.|| operator (if condition is false, i want to display something)
*/

export default Cart;