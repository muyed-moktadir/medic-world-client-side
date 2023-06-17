// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Service = ({ service }) => {

  // eslint-disable-next-line react/prop-types
  const { name,icon, description } = service;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img
          src={icon}
          alt="Shoes"
          className="rounded-xl h-auto"
        />
      </figure>
      <div className="card-body items-center text-justify">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
