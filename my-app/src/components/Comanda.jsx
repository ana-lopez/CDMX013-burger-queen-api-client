import '../style.css';
import AddToOrder from './AddtoOrder';



function Comanda({products, addProduct, deleteItem}) {
    return (
        <div className="Comanda">
            <div className='select-table'>
                <label for="option-table" className='label-table'>Mesa</label>
                <select name="table" className='table-number'>
                    <option value=''>Selecciona mesa</option>
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
                        products.map( product => (<AddToOrder product={product} addProduct={addProduct} deleteItem={deleteItem}/>))
                    }    
                    <div className='buttons-order'>
                <button className='btn-pink'>Enviar</button>
                <button className='btn-orange'>Cancelar</button>
            </div> 
                </div>  
                             
            </div>
            
        </div>
    );
}

export default Comanda;