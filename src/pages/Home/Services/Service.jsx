// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Service = ({ service }) => {

  // eslint-disable-next-line react/prop-types
  const { name,icon, description } = service;

  return (
    <div className="card h-52 bg-base-100 shadow-xl">
      <figure className="px-10 pt-20">
        <img
          src={icon}
          alt="Shoes"
          className="rounded-xl h-auto"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
