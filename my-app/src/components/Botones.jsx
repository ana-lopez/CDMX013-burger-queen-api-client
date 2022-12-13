import '../style.css';

function Botones (props) {
    // if(props.selectedType){
    //     return (
    //         <div className='Botones-div'>
    //         <button className=`Buttons selected` onClick={() => props.handleProductTypeClick('breakfast')}>Desayuno</button>
    //         <button className='Buttons'>Comida</button>
    //     </div>
    //     )
    // } else {
    //     return (
    //         <div className='Botones-div'>
    //         <button className=`Buttons ` onClick={() => props.handleProductTypeClick('breakfast')}>Desayuno</button>
    //         <button className='Buttons selected'>Comida</button>
    //     </div>
    //     )
    // }
    

    return ( 
        <div className='Botones-div'>
            <button className={`Buttons ${props.selectedType === 'breakfast' ? 'selected':''}`} onClick={() => props.handleProductTypeClick('breakfast')}>Desayuno</button>
            <button className={`Buttons ${props.selectedType === 'meal' ? 'selected':''}`} onClick={() => props.handleProductTypeClick('meal')}>Comida</button>
        </div>
    );
    
}

export default Botones;