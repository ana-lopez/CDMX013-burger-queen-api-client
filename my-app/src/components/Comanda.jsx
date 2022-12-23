import { useState, useEffect } from 'react';
import '../style.css';
import axios from 'axios';
import AddToOrder from './AddtoOrder';

const sendOrder = (order) => {
    return axios.post('https://6373cc36716c2e191651797d.mockapi.io/orders', order, {headers: {'Content-type': 'application/json'}})
}

function Comanda({ order, addProduct, deleteItem }) {
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState();

    const [sendOrderIsLoading, setSendOrderIsLoading] = useState(false)
    const [sendOrderIsSuccess, setSendOrderIsSuccess] = useState(false)
    const [sendOrderIsError, setSendOrderIsError] = useState(false)

    useEffect(() => {
        let sum = 0;
        order.forEach(product => {
            sum += product.subtotal
        });
        setTotal(sum)
    }, [order])

    const selectDropdown = (e) => {
        const val = e.target.value;
        setSelected(val);
    } 

    // const sendOrder = () => {
    //     console.log(order)
    // }

    const handleSubmitOrder = () => {
        setSendOrderIsLoading(true)
        sendOrder(order).then(() => {
            setSendOrderIsLoading(false)
            setSendOrderIsSuccess(true)
        }).catch(() => {
          
            setSendOrderIsError(true)
        })
    }

    return (
        <div className="Comanda">
            <div className='select-table'>
                <h2 className='table'>Mesa</h2>
                <select onChange={selectDropdown} className='form-select'>
                    <option selected disabled>Selecciona mesa</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                
            </div>
             
            <div className="orden-comanda">
                <h3 id='orden'>ORDEN</h3>
                <div>
                    {
                        order.map(product => (<AddToOrder key={product.id} product={product} addProduct={addProduct} deleteItem={deleteItem} />))
                    }
                    <p>Total: ${total}</p>
                    <div className='buttons-order'>
                        <button className='btn-pink' onClick={handleSubmitOrder}>Enviar</button>
                        <button className='btn-orange'>Cancelar</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Comanda;