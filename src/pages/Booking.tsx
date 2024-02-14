import { useState } from "react";
import ReserveTable from "../components/bookings/ReserveTable";
import { ReserveForm } from "../components/ReserveForm";
import { ReservationComplete } from "../components/ReservationComplete";
import { BookingProvider } from "../context/BookingContext";
import returant from '../assets/homePageImage.png'





export const Booking = () => {
const [reservationFlow, setReservationFlow] = useState<string>('reserveTable')
const [fade, setFade] = useState<boolean>(true)

  return(
  
  
   
  <article className="BookingArticle">
    <div className={fade? "BookingArticle___overLay" :"BookingArticle___overLayOut" }></div>
    <img  src={returant} alt="resturant" className="BookingArticle___backgroundImg" />
<section className={fade? "BookingContainer": 'BookingContainerOut'}> 

<BookingProvider>
{reservationFlow === 'reserveTable' && < ReserveTable setReservationFlow={setReservationFlow}/>}

{reservationFlow === 'reserveFrom' && <ReserveForm setReservationFlow={setReservationFlow} /> }

{reservationFlow === 'reserveComplete' && <ReservationComplete setFade={setFade}  /> }
</BookingProvider>
</section>
    </article>
    
  )
};
