import React from 'react';
import './Tshirt.css'

const Tshirts = ({tshirt}) => {
    const {picture, name, gender,price}= tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>Name:{name}</h2>
            <p>Gender:{gender}</p>
            <p>Price:{price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirts;