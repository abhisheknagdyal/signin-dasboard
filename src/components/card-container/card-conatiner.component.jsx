import Card from "../card/card-componet";
import "./card-container.styles.css";
import revenue from "./card.assests/revenue.svg";
import transaction from "./card.assests/transaction.svg";
import like from "./card.assests/Like.svg";
import user from "./card.assests/User.svg";




function  CardContainer(){
    
    const cards = [
        {
            id: 1,
            logo: revenue,
            cardTitle: "Total Revenues",
            cardValue: `$${'2,129,430'}`,
            color: "pale-green"
        },
        {   
            id:2,
            logo: transaction,
            cardTitle: "Total Transactions",
            cardValue: `${"1,520"}`,
            color: "pale-yello"
        },
        {   
            id:3,
            logo: like,
            cardTitle: "Total Likes",
            cardValue: `${"9,721"}`,
            color: "pale-pink"
        },
        {   
            id:4,
            logo: user,
            cardTitle: "Total Users",
            cardValue: `${"892"}`,
            color: "pale-purple"
        },
    ]


    return(
        <div className="cards-conatiner">
            {
                cards.map(card=>(
                    <Card key={card.id} card={card}/>
                ))
            }
        </div>
    );
}
export default CardContainer;
