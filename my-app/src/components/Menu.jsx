import '../style.css';
import { getProducts } from '../services/api';
import Card from './Card-menu';
import React, { useState, useEffect } from 'react';

function Menu() {
    // const array = [1,2,3,4,5]
    // const prueba = array.map((number) => 
    // <p>{number}</p>
    // );
    
    const [productsState, setProducts]= useState({
        isloading:false,
        error:null,
        list: [],
        filteredList: []
    })

    useEffect(()=>{
        setProducts({isloading: true, list:[], error: null})
        getProducts()
        .then(response =>  {
            const allProducts = response.data;
            const breakfast = allProducts.filter((product) => product.type === 'breakfast');
        
            setProducts({isloading: false, list:response.data, error: null, filteredList: breakfast})
        })
        .catch(error =>  setProducts({isloading: false, list:[], error: error.message}))

    },[setProducts])

    const handleProductTypeClick = (productType) => {
        setProducts((prevState) => {
            // filtrar
            const newFilterList = prevState.list.filter((product) => product.type === productType);
            return {
                ...prevState,
                filteredList: newFilterList
            }
        })
    }

    
    return (
        <>
        <div className='Botones-div'>
            <button className='Buttons' onClick={() => handleProductTypeClick('breakfast')}>Desayuno</button>
            <button className='Buttons' onClick={() => handleProductTypeClick('meal')}>Comida</button>
        </div>
        <div className="Menu-breakfast">

            {productsState.isloading && (<div>Espera mientras llegan los productos</div>)}
            {productsState.error &&(<div> Por el momento no puedo mostrar los productos algo salio mal =(</div>)}
            {!productsState.isloading && !productsState.error && (
                  
            <ul>
                {productsState.filteredList.map(p => (<Card imgSrc={p.image} imgAtl={p.name} name={p.name} />))}
            </ul> 
              
            )}
            
        </div>
        </>
        
    );
}
// Iterar dentro del array y por cada uno de esos elementos generar una etiqueta p con el contenido del producto
// 
export default Menu;