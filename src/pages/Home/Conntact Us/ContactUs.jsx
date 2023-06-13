// eslint-disable-next-line no-unused-vars
import React from "react";
import { CustomButton } from "../InfoCards/InfocardStyle";
import { backgrndImage } from "./ContactusStyle";

const ContactUs = () => {
  return (
    <div className="hero bg-base-200" style={backgrndImage}>
      <div className="card flex-shrink-0 w-full max-w-sm my-10">
        <div className="card-body">
          <div className=" text-center mb-4">
            <h5 className="text-primary text-center">Conatct Us</h5>
            <h1 className="text-white text-2xl text-center">hello From the world</h1>
          </div>
          <div className="form-control">
            <input
              type="mail"
              placeholder="your email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-accent"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-[50%] mx-auto mt-3">
            <CustomButton>Submit</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
