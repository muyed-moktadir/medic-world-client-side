// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { format } from 'date-fns'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect } from 'react'
import { fatcher } from '../../../api/BaseUrl'
import { useState } from 'react'
import AppointmentOption from './AppointmentOption'
// import axios from 'axios'
// import axios from 'axios'

// eslint-disable-next-line react/prop-types
const AvailableAppointments = ({selectedDate}) => {

  // eslint-disable-next-line no-unused-vars
  const [appointmentOptions, setAppointmentOptions] = useState([])
  console.log(appointmentOptions)
     
     useEffect(()=>{
      (async()=>{
        const result= await fatcher.get("")
        setAppointmentOptions(result.data)
      })()
     },[])

  return (
    <section className=' w-[97%] mx-auto  my-10'>
       <p className="text-center text-accent font-bold">you have selected {format(selectedDate,"PPP")}</p>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {
          appointmentOptions.map((option)=>{
            return <AppointmentOption key={option._id} appointmentOption={option}/>
          })
        }
       </div>
    </section>
  )
}

export default AvailableAppointments
