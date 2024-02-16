import { useState } from "react";
import { UseBookingContext } from "../context/BookingContext";
import { postBooking } from "../services/postBooking";

interface Props {
  setReservationFlow: (selectedDate: string) => void;
}

export const ReserveForm = ({ setReservationFlow }: Props) => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const {
    date,
    setDate,
    time,
    setTime,
    numberOfGuests,
    setNumberOfGuests,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    reservationId,
    setReservationId,
    restaurantId,
  } = UseBookingContext();

  const handleSave = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const bookingData = {
      restaurantId: restaurantId,
      date: date,
      time: time,
      numberOfGuests: numberOfGuests,
      customer: {
        name: name,
        lastname: lastName,
        email: email,
        phone: phone,
      },
    };

    /* context */
    setName(firstname);
    setLastName(lastname);
    setPhone(phoneNumber);
    setEmail(mail);

    postBooking(bookingData)
      .then((response) => {
        setReservationId(response.insertedId);
        console.log(response.insertedId);
        console.log("Booking submitted successfully:", response);
      })
      .catch((error) => {
        console.error("Error submitting booking:", error);
      });

    /* form */
    setFirstName("");
    setLastname("");
    setPhoneNumber("");
    setMail("");
    setReservationFlow("reserveComplete");
  };

  const handleCancel = () => {
    setFirstName("");
    setPhoneNumber("");
    setMail("");
    setReservationFlow("first");
  };

  return (
    <form onSubmit={handleSave} className="reserveForm">
      <div>
        <label htmlFor="firstname">Förnamn:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
          minLength={2}
          maxLength={15}
        />
      </div>
      <div>
        <label htmlFor="lastname">Efternamn:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
          minLength={2}
          maxLength={15}
        />
      </div>
      <div>
        <label htmlFor="mail">Email:</label>
        <input type="mail" id="mail" name="mail" value={mail} onChange={(e) => setMail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="phoneNumber">Telefon:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          minLength={7}
          maxLength={15}
        />
      </div>
      <section className="reserveForm___btn">
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </section>
    </form>
  );
};
