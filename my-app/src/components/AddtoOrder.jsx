import '../style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus,faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function AddToOrder({product, addProduct, deleteItem, handleSumTotal}){
    // const [unit, setUnit] = useState();
        
    //     const increase = () => {
    //             setUnit(unit => unit +1);
    //     }
    
    //     const decrease = () => {
    //         if(unit >=1){
    //             setUnit(unit => unit -1);
    //         }
    //     }

    return (
        <section className='counter-container'>
            <p className='product-name'>{product.item.name}</p>
            <p className='item-price'>$ {product.subtotal}</p>
            <div className='counter'>
                <FontAwesomeIcon icon={faCircleMinus} onClick={() => deleteItem(product.item)} size="lg" />
                <div className='counter-dish'>{product.qty}</div>
                <FontAwesomeIcon icon={faCirclePlus} onClick={() => addProduct(product.item)} size="lg" />
            </div>
            <FontAwesomeIcon icon={faTrashCan} size="lg"/>
            
        </section>
    );
}

export default AddToOrder;

