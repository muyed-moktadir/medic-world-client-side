// eslint-disable-next-line no-unused-vars
import React from "react";
import quote from "../../../assets/icons/quote.svg";
import { reviewData } from "./TestimonialStyle";
import Testimonial from "./Testimonial";



const Testimonials = () => {
  return (
    <section className=" my-12">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h4 className="text-xl text-primary">Testimonial</h4>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <figure className="justify-self-end">
          <img className=" w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="w-[97%] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2" >
        {
            reviewData.map((review)=>{
                return(<Testimonial review={review} key={review._id}/>)
            })
        }
      </div>
    </section>
  );
};

export default Testimonials;
