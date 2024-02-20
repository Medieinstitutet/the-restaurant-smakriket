import { useState } from 'react';
import returant from '../assets/homePageImage.png';
import { BookingProvider} from '../context/BookingContext';
import { Login } from '../components/signin/Login';
import { ReservationChangesDone } from '../components/signin/ReservationChangesDone';
import ReserveTable from '../components/bookings/ReserveTable';
import { ModifyOrDelete } from '../components/signin/ModifyOrDelete';





export const SignIn = () => {
const [reservationFlow, setReservationFlow] = useState('first')





  return (
    <BookingProvider>
  <article className="signinContainer">

<img  src={returant} alt="resturant" className="signinContainer___backgroundImg" />
<div className="signinContainer___overLay" ></div>
<section className="signinContainer___signin">

{reservationFlow === 'first' && <Login setReservationFlow={setReservationFlow}    />   }
{reservationFlow === 'modify' && <ModifyOrDelete setReservationFlow={setReservationFlow}/>   }
{reservationFlow === 'modify-date-persons' && <ReserveTable setReservationFlow={setReservationFlow}/>   }



{reservationFlow === 'reserveFrom' && <ReservationChangesDone setReservationFlow={setReservationFlow}/>  }




</section>


  </article>
  </BookingProvider>
  
  )
  ;
};
