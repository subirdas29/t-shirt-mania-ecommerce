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
        console.log(tshirt);
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
            <Cart></Cart>
        </div>
        </div>
    )};

export default Home;