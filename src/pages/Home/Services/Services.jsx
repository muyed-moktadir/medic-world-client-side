// eslint-disable-next-line no-unused-vars
import React from "react";
import { services } from "./ServiceStyle";
import Service from "./Service";

const Services = () => {
  return (
    <div className=" text-center mt-6">
      <div>
        <h3>Our services</h3>
        <h1 className=" text-lg text-primary "> Services We Provide</h1>
        <div className="w-[97%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
          {
            services.map((service)=>{
              return (<Service key={service.id} service={service}/>)
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
