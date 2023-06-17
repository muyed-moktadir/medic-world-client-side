/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { CustomButton } from '../../Home/InfoCards/InfocardStyle'

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption
    console.log(name)
    return (
        <div className="card shadow-xl">
            <div className="card-body items-center justify-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length> 0 ? slots[0]:'' }</p>
                <div className="card-actions justify-center mt-8 ">
                   <CustomButton>Book Appointment</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default AppointmentOption
