import { useBookingContext } from '../../context/BookingContext'
import { UpdateBooking } from '../../models/UpdateBooking'
import {  updateReservation } from '../../services/updateReservation'
interface Props{
    setReservationFlow:(selectedDate:string) => void
  }
export const ReservationChangesDone = ({setReservationFlow }:Props) => {
  const { date, time,numberOfGuests,  customerId, restaurantId, reservationId, setBookings, setError, error } = useBookingContext()
const bookingData:UpdateBooking = {
  id:reservationId,
  restaurantId,
  date,
  time,
  numberOfGuests,
  customerId
};
const OnClickSave = async() => {
 
const res = await updateReservation(reservationId, bookingData, setError)
if(res)
setBookings([]), 
setError('')
}
  return (
    <section className='ReservationChangesDone'>
<p>Datum: {date}</p> 
<p>Tid: {time}</p> 
<p>Antal gäster: {numberOfGuests}</p> 
<section className='ReservationChangesDone___btn'> 
<button onClick={() => {setReservationFlow('first'), setBookings([]), setError('')}}> Backa </button>
<button onClick={OnClickSave}> Spara </button>
</section>
<section className='ReservationChangesDone___error'>
 <p>{error}</p> 
 </section>
    </section>
  )
}
