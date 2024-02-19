import { useState, MouseEvent } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import { DatePickerComponent } from "./DatePickerComponent";
import { DropDown } from "./DropDown";
import { UseBookingContext } from "../../context/BookingContext";

interface Props {
  setReservationFlow: (selectedDate: string) => void;
}

interface FindBooking {
  time: string;
}

const ReserveTable = ({ setReservationFlow }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());
  const [persons, setPersons] = useState<number>(1);
  const [findBookings, setFindBookings] = useState<FindBooking[]>([]);

  const { setDate, setTime, setNumberOfGuests, setName, setLastName, setEmail, setPhone,  error,
    setError } = UseBookingContext();

    /* Nollställer error om fel-meddelande finns när sidan startas */
    setError('')

  /* reset all context data */
  setDate("");
  setTime("");
  setNumberOfGuests(0);
  setName("");
  setEmail("");
  setLastName("");
  setPhone("");

  /* Find tables */
  const onClickFindTables = () => {
    console.log(persons, selectedDate);
    if (selectedDate && persons) {
      setFindBookings([ { time: "18:00" }, { time: "21:00" } ]);
    } else {
      setError("inga bord");
    }
  };

  /* Reserve table */
  const onClickReserveTable = (e: MouseEvent, item: FindBooking) => {
    e.preventDefault();
    setFindBookings([]);
    setReservationFlow("reserveFrom");
    setTime(item.time);
    setDate(selectedDate.format("YYYY-MM-DD"));
    setNumberOfGuests(persons);
  };

  return (
    <section className="reserveContainer">
      <section className="reserveContainer___inputs">
        <section className="dropDownContainer">
          <DropDown setPersons={setPersons} />
        </section>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </LocalizationProvider>
        <button className="bookingBtn" onClick={onClickFindTables}>
          {" "}
          Hitta lediga bord
        </button>
      </section>
      <section className="reserveContainer___meassages">
        {findBookings.length >= 1 && error === "" ? (
          <>
            {findBookings.map((item, i) => {
              return (
                <button
                  key={i}
                  className="reserveContainer___meassages___timeBtn"
                  onClick={(e) => onClickReserveTable(e, item)}
                >
                  {" "}
                  {item.time}{" "}
                </button>
              );
            })}
          </>
        ) : (
          <p> {error} </p>
        )}
      </section>
    </section>
  );
};

export default ReserveTable;
