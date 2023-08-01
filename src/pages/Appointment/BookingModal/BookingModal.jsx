
import { format } from 'date-fns'
import React from 'react'

const BookingModal = ({ treatment, selectedDate }) => {

  const { name, slots } = treatment //TODO: treatment is an appointment options.
  const date = format(selectedDate, "PPP")
  
  return (
    <>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label htmlFor="booking_modal" class="btn btn-sm btn-circle btn-primary absolute right-2 top-2 text-rose-500 bg-black">✕</label>
          <h3 className="font-bold text-lg">{name}</h3>

          {/*------------------TODO: form data------------------ */}
          <form className=' grid grid-cols-1 gap-3 mt-5' >
            <input type="text" disabled value={date} placeholder="Type here" class="input input-bordered input-primary w-[90%] mx-auto " />

            <select class="select select-primary w-[90%] mx-auto ">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>

            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-[90%] mx-auto " />
            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-[90%] mx-auto " />
            <br />
            <input type="submit" value="Submit" className="btn btn-accent w-[90%] mx-auto" />
          </form>
          {/*------------------TODO: form data------------------ */}
          
        </div>
      </div>
    </>
  )
}

export default BookingModal
