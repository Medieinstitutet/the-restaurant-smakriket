import { useState, MouseEvent } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import { DatePickerComponent } from "./DatePickerComponent";
import { DropDown } from "./DropDown";
import { UseBookingContext } from "../../context/BookingContext";
import { AvailableTables } from "../availableTables";
import { IBooking } from "../../models/IBookings";
import { getBookings } from "../../services/getBookings";

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
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const { setDate, setTime, setNumberOfGuests, setName, setLastName, setEmail, setPhone } = UseBookingContext();

  /* reset all context data */
  setDate("");
  setTime("");
  setNumberOfGuests(0);
  setName("");
  setEmail("");
  setLastName("");
  setPhone("");

  const getData = async () => {
    const bookingsResponse = await getBookings();

    setBookings(bookingsResponse);
  };

  if (bookings.length === 0) {
    getData();
  }
  /* Find tables */
  const onClickFindTables = () => {
    const newDate = selectedDate.format("YYYY-MM-DD");
    if (selectedDate && persons) {
      console.log(persons);

      AvailableTables(bookings, newDate, persons); /* [{ time: "18:00" }, { time: "21:00" }] */
      setFindBookings([{ time: "18:00" }, { time: "21:00" }]);
    } else {
      setErrorMessage("inga bord");
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
        {findBookings.length >= 1 && errorMessage === "" ? (
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
          <p> {errorMessage} </p>
        )}
      </section>
    </section>
  );
};

export default ReserveTable;
