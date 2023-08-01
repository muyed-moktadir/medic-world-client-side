// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointment = () => {
  
  // Lifting Up state
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <div className=' mt-16'>
      <AppointmentBanner 
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      />
      <AvailableAppointments selectedDate={selectedDate}/>
    </div>
  )
}

export default Appointment
