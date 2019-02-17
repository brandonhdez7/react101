import React from 'react';
import Card from './Card'

function PokerHand(props){
    // a pokerhand is made up of cards
    let hand = props.cards.map((card)=>{
        return <Card card={card} />
    })
    return(
        <div className="col-sm-12">
            {hand}
        </div>
    )
}

export default PokerHand