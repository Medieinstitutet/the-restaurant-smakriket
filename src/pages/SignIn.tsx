import { useState } from 'react';
import returant from '../assets/homePageImage.png';
import { ReserveForm } from '../components/ReserveForm';
import { BookingProvider } from '../context/BookingContext';
import { Login } from '../components/signin/Login';
import { ReservationChangesDone } from '../components/signin/ReservationChangesDone';




export const SignIn = () => {
const [reservationFlow, setReservationFlow] = useState('first')







  return (
    <BookingProvider>
  <article className="signinContainer">


<img  src={returant} alt="resturant" className="signinContainer___backgroundImg" />
<div className="signinContainer___overLay" ></div>
<section className="signinContainer___signin">

{reservationFlow === 'first' && <Login setReservationFlow={setReservationFlow}    />   }

{reservationFlow === 'modify' &&<ReserveForm setReservationFlow={setReservationFlow}/>   }


{reservationFlow === 'reserveComplete' && <ReservationChangesDone setReservationFlow={setReservationFlow}/>  }




</section>


  </article>
  </BookingProvider>
  
  )
  ;
};
