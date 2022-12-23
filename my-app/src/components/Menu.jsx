import '../style.css';
import { getProducts } from '../services/api';
import Card from './Card-menu';
import React, { useState, useEffect } from 'react';
import Comanda from './Comanda';
import Botones from './Botones';

function Menu() {
    // const array = [1,2,3,4,5]
    // const prueba = array.map((number) => 
    // <p>{number}</p>
    // );

    const [productsState, setProducts] = useState({
        isloading: false,
        error: null,
        list: [],
        filteredList: []
    })

    const [productsOrder, setProductsOrder] = useState([])

    const [selectedType, setSelectedType] = useState('breakfast') //

    useEffect(() => {
        setProducts({ isloading: true, list: [], error: null })
        getProducts()
            .then(response => {
                const allProducts = response.data;
                const breakfast = allProducts.filter((product) => product.type === 'breakfast');

                setProducts({ isloading: false, list: response.data, error: null, filteredList: breakfast })
            })
            .catch(error => setProducts({ isloading: false, list: [], error: error.message }))

    }, [setProducts])

    const handleProductTypeClick = (productType) => {
        setSelectedType(productType)
        setProducts((prevState) => {
            // filtrar
            const newFilterList = prevState.list.filter((product) => product.type === productType);
            return {
                ...prevState,
                filteredList: newFilterList
            }
        })
    }

    const addProduct = (p) => {
        const orderItem = productsOrder.find((product) => {
            return product.item.id === p.id
        })

        console.log(orderItem)
        if (orderItem) {
            // orderItem.qty = orderItem.qty + 1
            // orderItem.qty += 1
            orderItem.qty++
            orderItem.subtotal += p.price;
            let total = orderItem.qty * p.price
            console.log(total)
            // setProductsOrder(productsOrder.map( product => product.id === p.id ? ))
            setProductsOrder([...productsOrder])
            return
        } 

        setProductsOrder([...productsOrder, { item: p, qty: 1, subtotal: p.price}])
        console.log()
    }

    const deleteItem = (p) => {
        const orderItem = productsOrder.find((product) => {
            return product.item.id === p.id
        })

        if (orderItem) {
            orderItem.qty--
            //orderItem.subtotal = orderItem.subtotal - p.price
            orderItem.subtotal -= p.price;
            if (orderItem.qty <= 0){
                setProductsOrder(productsOrder.filter())
            }else{
                setProductsOrder([...productsOrder])
            }
        } 
    }
    const eraseAllItems = (p) => {
        const
    }

    const handleSumTotal = () => {
        let sumTotal = 0
        productsOrder.map((element) => {
            sumTotal =+ productsOrder.subtotal
        })
        return sumTotal
    }

    return (
        <>
            <Botones handleProductTypeClick={handleProductTypeClick} selectedType={selectedType} /> {/* renderiza botones, handleProduct se encarga de filtrar
            por tipo de alimento y selectedType a cambiar el color del menu seleccionado*/}

            <div className="Menu-breakfast">
                {productsState.isloading && (<div className='is-loading'>Espera mientras llegan los productos</div>)}
                {productsState.error && (<div> Por el momento no puedo mostrar los productos algo salio mal =(</div>)}
                {!productsState.isloading && !productsState.error && (

                    <ul>
                        {productsState.filteredList.map(p => (<Card key={p.id} imgSrc={p.image} handleClick={() => addProduct(p)} imgAlt={p.name} name={p.name} />))}
                    </ul>

                )}

            </div>
            <Comanda order={productsOrder} addProduct={addProduct} deleteItem={deleteItem} />
        </>

    );
}

export default Menu;