import React from "react";

const Card = props => {
  return (
    <div
      className={`card${props.card.completed ? " completed" : ""}`}
      onClick={() => props.toggleCard(props.card.id)}
    >
      <div className="img-container">
        <img src={props.card.img} alt={""} />
      </div>
      <h3>{props.card.title}</h3>
      <p>{props.card.category.toUpperCase()}</p>
      <a href={`${props.card.link}`}>Read Article</a>
    </div>
  );
};

export default Card;
