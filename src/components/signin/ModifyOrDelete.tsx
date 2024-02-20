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
    <section className="ModifyOrDeleteContainer">
      <button onClick={OnClickChange}>Ändra</button>
      <button onClick={OnClickDelete}>Radera</button>
    </section>
  );
};
