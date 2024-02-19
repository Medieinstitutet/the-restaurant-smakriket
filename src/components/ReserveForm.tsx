
import { UseBookingContext } from "../context/BookingContext";
import { postBooking } from "../services/postBooking";
import { UseGlobalContext } from "../context/GlobalContext";
import { AvailableTables } from "./availableTables";
import { useState } from "react";

interface Props {
  setReservationFlow: (selectedDate: string) => void;
}

export const ReserveForm = ({ setReservationFlow }: Props) => {
 /*  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>(""); */
  const [hasCheckedAvailability, setHasCheckedAvailability] = useState(false);

  const {date, time, numberOfGuests, name, setName, lastname,setLastname,email,setEmail,phone, setPhone,setReservationId, restaurantId, setError, error} = UseBookingContext();
  const {setLoading} = UseGlobalContext()



  if (!hasCheckedAvailability) {
    AvailableTables(date, numberOfGuests, setHasCheckedAvailability);
  }

  const handleSave = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();


    const bookingData = {
      restaurantId: restaurantId,
      date: date,
      time: time,
      numberOfGuests: numberOfGuests,
      customer: {
        name,
        lastname,
        email,
        phone,
      },
    };
    if (hasCheckedAvailability) {
    setLoading(true)
    setError('')
    postBooking(bookingData)
      .then((response) => {
        setReservationId(response.insertedId);
setLoading(false)

setReservationFlow("reserveComplete");
 

        

      })
      .catch(() => {
        setLoading(false)
        setError('något gick fel')
        setTimeout(() => {
          setError('')
           }, 3000);
      
      });

  

 }

  };

  const handleCancel = () => {
   setName("");
setLastname("");
setPhone("");
setEmail(""); 
    setReservationFlow("first");
  };

  return (
    <form onSubmit={handleSave} className="reserveForm">
      <div>
        <label htmlFor="firstname">Förnamn:</label>
        <input
          type="text"
          id="firstname"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <input type="mail" id="mail" name="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="phoneNumber">Telefon:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          minLength={7}
          maxLength={15}
        />
      </div>
      <section className="reserveForm___btn">
        <button type="button" onClick={handleCancel}>
          Avbryt
        </button>
        <button type="submit">Boka</button>
      </section>
      <section className="reserveForm___error">
        <p >
          {error}
        </p>
        
      </section>
    </form>
  );
};
