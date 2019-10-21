import React from 'react'
import { connect } from 'react-redux'

const Card = ({cards}) => {
    
    if (!cards[0]) return (<div>{console.log(cards)}</div>)

    const {value, suit, image} = cards[0]
    return (
        <div>
            <h3>{value} of {suit}</h3>
            <img src={image} alt='no image'/>
            <br/>
        </div>
    )
}

//means from an input of deck, extract cards from it and pass cards as input
//to the Card class
//due to this, there's no need to pass value for card directly
//as it fetches it from deck's value
export default connect(
    ({deck: {cards}}) => 
        (
            {cards}
        )
    )(Card)