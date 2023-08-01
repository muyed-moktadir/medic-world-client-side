import React from 'react'
// import { CustomButton } from '../../Home/InfoCards/InfocardStyle'


const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots } = appointmentOption;

    return (
        <div className="card shadow-xl mt-6">
            <div className="card-body items-center justify-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length > 0 ? slots[13] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "sapce"} available</p>
                <div className="card-actions justify-center mt-8 ">
                    {/* <CustomButton >Book Appointment</CustomButton> */}
                    <label
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking_modal"
                        className="btn capitalize">Booking</label>
                </div>
            </div>
        </div>
    )
}

export default AppointmentOption
