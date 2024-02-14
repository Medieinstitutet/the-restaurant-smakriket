import { useState } from "react";
import ReserveTable from "../components/bookings/ReserveTable";
import {  UseAdminLoginContext } from "../context/AdminLogin";

export const Booking = () => {
const [reservationFlow, setReservationFlow] = useState('reserveTable')





  return <article className="BookingArticle">
<section className="BookingContainer"> 


{reservationFlow === 'reserveTable' && < ReserveTable />}




</section>
    </article>
};
