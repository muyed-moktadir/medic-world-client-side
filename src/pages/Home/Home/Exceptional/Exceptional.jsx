// eslint-disable-next-line no-unused-vars
import React from "react";
import treatment from "../../../../assets/images/treatment.png";
import { CustomButton } from "../../InfoCards/InfocardStyle";

const Exceptional = () => {
  return (
    <div className="hero w-[97%] mx-auto">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 md:gap-32 lg:mx-28 lg:my-28">
        <img
          className="w-[100%] h-60 md:h-[500px] shrink-0 rounded-lg shadow-2xl"
          src={treatment}
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
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

export default Exceptional;
