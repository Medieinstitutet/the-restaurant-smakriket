import React from 'react'
interface Props{
    setReservationFlow:(selectedDate:string) => void
  }
export const ReservationChangesDone = ({setReservationFlow }:Props) => {
  return (
    <section className='ReservationChangesDone'>


<p> Reservation ändrad </p> 
<button onClick={() => setReservationFlow('first')}> Backa </button>
    </section>
  )
}
