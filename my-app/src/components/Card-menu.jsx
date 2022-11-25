import '../style.css';

function Card(props) {
    return (
        <figure className="card-menu">
            <img src={props.imgSrc} className="pruebacard" alt ={props.imgAlt}/>
            <p>{props.name}</p>
        </figure>
    );
}

export default Card;