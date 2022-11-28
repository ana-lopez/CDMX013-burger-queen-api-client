import '../style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus,faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";


function NumberDishes(){
    const [unit, setUnit] = useState(1);
        
        const increase = () => {
                setUnit(unit => unit +1);
            
        }
    
        const decrease = () => {
            if(unit >=1){
                setUnit(unit => unit -1);
            }
        }
    
    return (
        <div className='counter-container'>
            <p>Chilaquiles</p>
            <p>$80</p>
            <FontAwesomeIcon icon={faCircleMinus} onClick={decrease} size="lg" />
            <div className='number-selectedfood'>{unit}</div>
            <FontAwesomeIcon icon={faCirclePlus} onClick={increase} size="lg" />
            <FontAwesomeIcon icon={faTrashCan} size="lg"/>
        </div>
    );
}

export default NumberDishes;

