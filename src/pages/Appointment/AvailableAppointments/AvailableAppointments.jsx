// eslint-disable-next-line no-unused-vars
import { format } from 'date-fns'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const AvailableAppointments = ({selectedDate}) => {
     
     useEffect(()=>{
      
     },[])

  return (
    <section className='  my-10'>
       <p className="text-center text-accent font-bold">you have selected {format(selectedDate,"PPP")}</p>
    </section>
  )
}

export default AvailableAppointments
