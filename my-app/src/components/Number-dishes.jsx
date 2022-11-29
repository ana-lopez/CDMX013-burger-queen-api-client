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
            <div className='counter'>
                <FontAwesomeIcon icon={faCircleMinus} onClick={decrease} size="lg" />
                <div className='counter-dish'>{unit}</div>
                <FontAwesomeIcon icon={faCirclePlus} onClick={increase} size="lg" />
            </div>
            <FontAwesomeIcon icon={faTrashCan} size="lg"/>
        </div>
    );
}

export default NumberDishes;

