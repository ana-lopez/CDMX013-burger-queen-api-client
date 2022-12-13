import '../style.css';

function Card(props) {
    return (
        <figure className="card-menu">
            <img src={props.imgSrc} onClick= {props.handleClick} className="pruebacard" alt ={props.imgAlt}/>
            <p>{props.name}</p>
        </figure>
    );
}

export default Card;