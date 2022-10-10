import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [gift,setGift] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p><small>Gift:{gift}</small></p>
            <button onClick={()=> setGift(gift +1)}>Increase</button>
        </div>
    );
};

export default Special;