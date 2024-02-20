import React from 'react'
import { useBookingContext } from '../../context/BookingContext'
interface Props{
    setReservationFlow:(selectedDate:string) => void
  }

export const ModifyOrDelete = ({setReservationFlow}:Props) => {
  const { reservationId } = useBookingContext()
const OnCklickChange = (): void =>  {

    setReservationFlow('modify-date-persons')
}


  return (
    <section className='ModifyOrDeleteContainer'>
      <section className='ModifyOrDeleteContainer___header'>

<p className='ModifyOrDeleteContainer___header___bold'>Reservation:  </p> <p>{reservationId} </p>

      </section>
      <section className='ModifyOrDeleteContainer___btn'> 
<button onClick={OnCklickChange}>Ändra</button>
<button>Radera</button>
</section>
    </section>
  )
}
