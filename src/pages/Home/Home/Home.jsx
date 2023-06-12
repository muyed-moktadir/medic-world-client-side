// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Exceptional from "./Exceptional/Exceptional";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonials from "../Testimonial/Testimonials";



export const Home = () => {
  
  return (
    <div className="mx-5">
      <Banner/>
      <InfoCards/>
      <Services/>
      <Exceptional/>
      <MakeAppointment/>
      <Testimonials/>
    </div>
  );
};
