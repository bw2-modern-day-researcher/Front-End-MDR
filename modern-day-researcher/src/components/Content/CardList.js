import React from 'react';
import Card from './Card';


const CardList = props => {
  return (
    <div className="cards-container">
          {props.cards.map(card => <Card key={card.id} card={card} toggleCard={props.toggleCard}/>)}
    </div>
  )
}

export default CardList;