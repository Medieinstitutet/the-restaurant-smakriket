import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigations";
import { getBookings } from "./services/getBookings";
import { IBooking } from "./models/IBookings";
import { useState } from "react";
import { BookingsListContext } from "./context/BookingsListContext";

export const Layout = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  console.log(bookings);

  const getData = async () => {
    const bookingsResponse = await getBookings();

    setBookings(bookingsResponse);
  };

  if (bookings.length === 0) {
    getData();
  }

  return (
    <>
      <header>{<Navigation />}</header>
      <BookingsListContext.Provider value={{ bookings }}>
        <main>
          <Outlet />
        </main>
      </BookingsListContext.Provider>
      <footer></footer>
    </>
  );
};
