
import { useBookingContext } from "../../context/BookingContext";
import { deleteBooking } from "../../services/deleteBooking";


interface Props {
  setReservationFlow: (selectedDate: string) => void;
}

export const ModifyOrDelete = ({ setReservationFlow }: Props) => {
  const { reservationId, setError } = useBookingContext();
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
<button onClick={OnClickChange}>Ändra</button>
<button onClick={OnClickDelete}>Radera</button>
</section>
    </section>
  );
};
