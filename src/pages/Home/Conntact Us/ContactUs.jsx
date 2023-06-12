// eslint-disable-next-line no-unused-vars
import React from "react";
import { CustomButton } from "../InfoCards/InfocardStyle";

const ContactUs = () => {
  return (
    <div className="hero bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm my-10">
        <div className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>
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
