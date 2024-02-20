import React, { useEffect } from "react";
import { deleteBooking } from "../../services/deleteBooking";
import { UseBookingContext } from "../../context/BookingContext";

interface Props {
  setReservationFlow: (selectedDate: string) => void;
}

export const ModifyOrDelete = ({ setReservationFlow }: Props) => {
  const { reservationId, setError } = UseBookingContext();
  const OnClickChange = (): void => {
    setReservationFlow("modify-date-persons");
  };
  const OnClickDelete = (): void => {
    deleteBooking(reservationId, setError);
  };
  return (
    <section className='ModifyOrDeleteContainer'>
      <section className='ModifyOrDeleteContainer___header'>

<p className='ModifyOrDeleteContainer___header___bold'>Reservation:  </p> <p>{reservationId} </p>

      </section>
      <section className='ModifyOrDeleteContainer___btn'> 
<button onClick={OnCklickChange}>Ändra</button>
<button onClick={OnClickDelete}>Radera</button>
</section>
    </section>
  );
};
