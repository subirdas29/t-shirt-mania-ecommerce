import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirts from '../tshirts/Tshirts';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([])

    const handleAddToCart = tshirt =>
    {
        const existing = cart.find(ts => ts._id === tshirt._id)
        if(existing)
        {
            alert('t-shirt already added')
        }
        else
        {
        const newCart = [...cart,tshirt];
        setCart(newCart);
        // alert('New tshirt added')
        }
        
    }

    const handleRemoveToCart = tshirt =>
    {
        const remaining = cart.filter(ts => ts._id !== tshirt._id)//ekhane ts holo cart e already thaka tshirt and tshirt holo jei tshirt ta pass korbo seta..
        setCart(remaining)
    }
    return (
        <div className='home-container'>
        <div className='t-shirt-container'>
            {
                tshirts.map(tshirt => 
                    <Tshirts 
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                    ></Tshirts>
                )
            }
        </div>
        <div className='cart-container'>
            <Cart cart={cart}
            handleRemoveToCart={handleRemoveToCart}></Cart>
        </div>
        </div>
    )};

export default Home;