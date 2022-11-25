import '../style.css';
import { getProducts } from '../services/api';
import Card from './Card-menu';
import React, { useState, useEffect } from 'react';

function Menu() {
    const array = [1,2,3,4,5]
    const prueba = array.map((number) => 
    <p>{number}</p>
    );

    const [productsState, setProductsSate]= useState({
        isloading:false,
        error:null,
        list: []
    })

    useEffect(()=>{
        setProductsSate({isloading: true, list:[], error: null})
        getProducts()
        .then(response =>  {

            setProductsSate({isloading: false, list:response.data, error: null})
        })
        .catch(error =>  setProductsSate({isloading: false, list:[], error: error.message}))

    },[setProductsSate])


    
    return (
        <>
        <div className="Menu-breakfast">
        
            {productsState.isloading && (<div>Espera mientras llegan los productos</div>)}
            {productsState.error &&(<div> Por el momento no puedo mostrar los productos algo salio mal =(</div>)}
            {!productsState.isloading && !productsState.error && (
                  
            <ul>
                {productsState.list.map(p => (<Card imgSrc={p.image} imgAtl={p.name} name={p.name} />))}
            </ul> 
              
            )}
            
        </div>
        </>
        
    );
}
// Iterar dentro del array y por cada uno de esos elementos generar una etiqueta p con el contenido del producto
// 
export default Menu;