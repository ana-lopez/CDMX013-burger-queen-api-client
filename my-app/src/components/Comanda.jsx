import '../style.css';
import NumberDishes from './Number-dishes';


function Comanda() {
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
                    <NumberDishes />  
                    <NumberDishes />
                    <NumberDishes />
                    <NumberDishes />     
                </div>                 
            </div>
        </div>
    );
}

export default Comanda;

//<button class="dropbtn"></button>