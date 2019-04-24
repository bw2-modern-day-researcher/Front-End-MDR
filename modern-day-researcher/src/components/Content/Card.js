import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.card.img} alt={""} />
      </div>
      <h3>{props.card.title}</h3>
      <p>{props.card.category.toUpperCase()}</p>
      <a href={`${props.card.link}`}>Read Article</a>
      <button
        type="submit"
        className={`mark${props.card.completed ? " completed" : ""}`}
        onClick={() => props.toggleCard(props.card)}
      >
        Mark as Read
      </button>
    </div>
  );
};

export default Card;
