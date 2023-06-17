// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { bgImage } from "../../Home/InfoCards/InfocardStyle";

// eslint-disable-next-line react/prop-types
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  // TODO: sate Lifting up to <Appointment/>

  return (
    <header className="w-[97%] mx-auto" style={bgImage}>
      <div className="hero">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto">
          <img
            src={chair}
            className=" sm:w-full md:w-[90%] mx-auto items-center rounded-lg shadow-2xl order-1 md:order-2"
          />
          <div className="flex items-end justify-end ">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
