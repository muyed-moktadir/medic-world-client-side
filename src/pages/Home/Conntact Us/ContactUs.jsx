// eslint-disable-next-line no-unused-vars
import React from "react";
import { CustomButton } from "../InfoCards/InfocardStyle"
import { ContactbgImage } from "./ContactStyle";
const ContactUs = () => {
  return (
    <div className="hero bg-base-200" style={ContactbgImage}>
      
      <div>
     
      </div>
      <div className="card flex-shrink-0  w-full max-w-sm my-10">
       
       
        <div className="card-body">
        <h5 className="text-primary">Contact US</h5>
        <h1 className="text-2xl">Stay connected with us</h1>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your email"
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
            <textarea className="textarea textarea-accent" placeholder="Your message"></textarea>
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
