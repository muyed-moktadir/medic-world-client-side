/* eslint-disable no-unused-vars */
import React from "react";
import chair from "../../../assets/images/chair.png"
import { CustomButton, bgImage } from "../InfoCards/InfocardStyle";


const Banner = () => {

  return (
    <div className=" hero w-[95%] mx-auto py-14 mt-5 bg-slate-200" style={bgImage}>
      <div className="hero-content flex-col lg:flex-row-reverse " >
        <img
          src={chair}
          className="w-[100%] md:w-1/2 shrink-0 rounded-lg shadow-2xl"
          alt=""
        />
        <div className="mx-4 text-justify">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <CustomButton>Get Started</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
