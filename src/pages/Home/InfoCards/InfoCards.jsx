// eslint-disable-next-line no-unused-vars
import React from "react";
import InfoCard from "./InfoCard";
import { cardData } from "./InfocardStyle";

// import data from ImageStyle



const InfoCards = () => {
  return (
    <div className=" w-[97%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
      {cardData.map((card) => {
        return <InfoCard key={card.id} card={card} />;
      })}
    </div>
  );
};

export default InfoCards;
