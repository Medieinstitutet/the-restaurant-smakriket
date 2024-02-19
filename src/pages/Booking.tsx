import { useState } from "react";
import ReserveTable from "../components/bookings/ReserveTable";
import { ReserveForm } from "../components/ReserveForm";
import { ReservationComplete } from "../components/ReservationComplete";
import { BookingProvider } from "../context/BookingContext";
import returant from '../assets/homePageImage.png';
import { LoadingAnimation } from "../components/LoadingAnimation";
import { UseGlobalContext } from "../context/GlobalContext";






export const Booking = () => {
const [reservationFlow, setReservationFlow] = useState<string>('first')
const [fade, setFade] = useState<boolean>(true)
const {loading} = UseGlobalContext()





  return(
  
  
   
  <article className="BookingArticle">
    <div className={fade? "BookingArticle___overLay" :"BookingArticle___overLayOut" }></div>
    <img  src={returant} alt="resturant" className="BookingArticle___backgroundImg" />
<section className={fade? "BookingContainer": 'BookingContainerOut'}> 

<BookingProvider>


{loading &&  < LoadingAnimation />}

{!loading && reservationFlow === 'first' && < ReserveTable setReservationFlow={setReservationFlow}/>}

{!loading && reservationFlow === 'reserveFrom' && <ReserveForm setReservationFlow={setReservationFlow} /> }

{!loading && reservationFlow === 'reserveComplete' && <ReservationComplete setFade={setFade} setReservationFlow={setReservationFlow}  /> }
</BookingProvider>
</section>
    </article>
    
  )
};
