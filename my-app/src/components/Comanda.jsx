import '../style.css';
import NumberDishes from './Number-dishes';


function Comanda() {
    return (
        <div className="Comanda">
            <div class="dropdown">
                <p>Mesa</p>
                
                <div class="dropdown-content" placeholder='Selecciona Mesa'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>                  
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