import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = React.createContext('Matir Ring');
const Grandpa = () => {
    let house =7
    const [gift, setGift] = useState(1)
    return (
        // <RingContext.Provider value='Dadir Ring'>
        <RingContext.Provider value={[gift,setGift]}>
           

            <div className='grandpa'>
                <h2>Grandpa</h2>
                <section className='flex'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>

                </section>
            </div>

        </RingContext.Provider>

    );
};

/*
1.declare a context 
2.set provider
3.use context hook
*/

export default Grandpa;