import '../style.css';
import { getProducts } from '../services/api';
import React, { useState, useEffect } from 'react';

function Botones () {
    

    return ( 
        <div className='Botones-div'>
            <button className='Buttons'>Desayuno</button>
            <button className='Buttons'>Comida</button>
        </div>
    );
}

export default Botones;