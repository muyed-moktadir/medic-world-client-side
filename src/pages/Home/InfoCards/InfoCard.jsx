// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ card}) => {
  // eslint-disable-next-line react/prop-types
  const { name, description, icon, bgClass  } = card;

  return (
    <div className={`card md:card-side text-center text-white ${bgClass} shadow-xl p-6`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
