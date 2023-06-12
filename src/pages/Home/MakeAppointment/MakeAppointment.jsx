// eslint-disable-next-line no-unused-vars
import React from "react";
import appointment from "../../../assets/images/appointment.png"
import doctor from "../../../assets/images/doctor-small.png"
import { CustomButton } from "../InfoCards/InfocardStyle";

const MakeAppointment = () => {
  return (
    <section className=" mt-10" style={{ backgroundImage: `url(${appointment})`, backgroundSize: 'cover' }}>
      <div className="hero ">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <img
            src={doctor}
            className="  shrink-0 hidden md:block lg:w-[90%] relative z-[20] rounded-lg -mt-28"
          />
          <div >
            <h3 className=" text-primary">Appointment</h3>
            <h1 className="text-2xl font-bold text-white py-2">Make an appointment Today</h1>
            <p className="py-2 whitespace-normal break-all hyphens-manual text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam reprehenderit 
            </p>
            <CustomButton>Get Started</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
