// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ card , index}) => {
 
  // eslint-disable-next-line react/prop-types
  const { name, description, icon, bgClass  } = card;


  const cardMarginValues = [
    "lg:mt-10 ",
    "lg:mb-8",
    "lg:mt-10",
  ];
  
  const cardMargin = cardMarginValues[index % cardMarginValues.length];
  // const cardvalue = cardMarginValues[index] || ''

  return (
    <div className={`card md:card-side text-center text-white ${bgClass} ${cardMargin} shadow-xl p-6 `}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body flex items-center justify-start text-justify">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
