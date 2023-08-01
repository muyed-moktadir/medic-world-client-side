// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { format } from 'date-fns'
import React from 'react'
import { useEffect } from 'react'
import { fatcher } from '../../../api/BaseUrl'
import { useState } from 'react'
import AppointmentOption from './AppointmentOption'
import BookingModal from '../BookingModal/BookingModal'



const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([])
  const [treatment, setTreatment] = useState(null)

  useEffect(() => {
    (async () => {
      const result = await fatcher.get("/")
      setAppointmentOptions(result.data)
    })()
  }, [])

  return (
    <section className=' w-[97%] mx-auto my-10'>
      <p className="text-center text-accent text-lg font-bold">you have selected {format(selectedDate, "PPP")}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {
          appointmentOptions.map((option) => {
            return <AppointmentOption
              key={option._id}
              appointmentOption={option}
              setTreatment={setTreatment}
            />
          })
        }
      </div>
      {
        treatment &&
        <BookingModal treatment={treatment} selectedDate={selectedDate}/>
      }
    </section>
  )
}

export default AvailableAppointments
