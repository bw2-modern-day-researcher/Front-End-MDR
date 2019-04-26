import React from "react";

const Card = props => {
  return (
    <div className={`card${props.card.seen ? " seen" : ""}`}>
      <h3>{props.card.title}</h3>
      <p>{props.card.category.toUpperCase()}</p>
      <a href={`${props.card.link}`}>READ NOW</a>
      <button
        type="submit"
        onClick={() => props.toggleCard(props.card)}
      >
        completed
      </button>
    </div>
  );
};

export default Card;
