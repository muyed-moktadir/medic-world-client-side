// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Testimonial = ({ review }) => {
  // eslint-disable-next-line react/prop-types
  const { name, reviews, image, location } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-10">
        <p>{reviews}</p>
        <div className="flex items-center justify-start mt-6">
          <div className="avatar">
            <div className=" ml-1 w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="ml-5">
            <h5>{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
