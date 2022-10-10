import React from 'react';
import Friends from '../Friends/Friends';

const Cousin = ({house}) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>House:{house}</small></p>
            <section>
                <Friends></Friends>
            </section>
        </div>
    );
};

export default Cousin;