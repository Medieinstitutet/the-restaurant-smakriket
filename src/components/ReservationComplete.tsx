
import { useNavigate } from 'react-router-dom';
import { UseBookingContext } from '../context/BookingContext';


interface Props{


  setFade: (fade:boolean) => void


}






export const ReservationComplete = ({setFade}:Props) => {
  const { date, setDate, time, setTime, numberOfGuests, setNumberOfGuests, name, setName, lastName, setLastName, email, setEmail, phone, setPhone, reservationId, setReservationId} = UseBookingContext()
const navigate = useNavigate();



  const onClickClose = () => {
    setFade(false)
    setTimeout(() =>{

      setDate('')
      setTime('')
      setNumberOfGuests(0)
      setName('')
      setEmail('')
      setLastName('')
      setPhone('')
      navigate('/');
     setReservationId



    }, 500)

  };

  return (
    <section className='reservationContainer'>
      <section className='reservationContainer___bookinginfo'> 
        <div>
        <h4>Datum: </h4>
    <p>{date}</p>
    </div>
    <div>
      <h4>Tid:</h4>
      <p> {time}</p>
      </div>
      <div> 
      <h4>Antal gäster: </h4>
      <p> {numberOfGuests}</p>
      </div>
      </section>
<section className='reservationContainer___customerinfo'> 

      <h4 className='reservationContainer___customerinfo___h4'>Reservationsinformation:</h4>
   
      <section>
        <p>Reservation: {reservationId }</p> 
      <p>{name} {lastName}</p>
      <p> {email}</p>
      <p> {phone}</p>
      </section>
      </section>
     <button onClick={onClickClose} className='reservationContainer___btn'> Stäng </button>
    </section>
  );
};
