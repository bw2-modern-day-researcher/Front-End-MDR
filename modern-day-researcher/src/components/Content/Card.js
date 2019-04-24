import React from "react";


const Card = props => {
  return (
    <div className="card">
        <div className="img-container">
          <img src={props.card.img} alt={""} />
        </div>
        <h3>{props.card.title}</h3>
        <p>{props.card.category}</p>
        <p>{props.card.link}</p>
    </div>
  );
};

export default Card;