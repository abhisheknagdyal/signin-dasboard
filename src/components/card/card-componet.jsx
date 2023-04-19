import "./card.styles.css"

function Card({card}){
    const {logo, cardTitle, cardValue, color} = card;

    return(
        <div className= {`card-container ${color}`}>
            <img className="logo" src={logo} alt="" />
            <p className="card-title">{cardTitle}</p>
            <p className="card-value">{cardValue}</p>   
        </div>
    );
}

export default Card;