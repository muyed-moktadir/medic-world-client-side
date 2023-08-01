import React, { useState } from "react";

const InfoCard = ({ card, index }) => {

  const { name, description, icon, bgClass } = card;


  const cardMarginValues = [
    "lg:mt-10 ",
    "lg:mb-8",
    "lg:mt-10",
  ];

  const cardMargin = cardMarginValues[index % cardMarginValues.length];
  // const cardvalue = cardMarginValues[index] || ''

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const cardStyle = {
  //   borderRadius: isHovered ? "0" : "20px",
  // };



  return (
    <div className={`card md:card-side text-center ${isHovered ? "border-0" : "rounded-lg"
      } text-white ${bgClass} ${cardMargin} shadow-xl p-6 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

    >
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
