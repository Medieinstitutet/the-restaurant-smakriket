import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigations";
import { useEffect, useReducer, useState } from "react";
import { BookingReducer, IBookingReducer } from "./reducers/BookingsReducer";
import { IBooking } from "./models/IBooking";
import { getBookings } from "./services/getBookings";
import { BookingContext } from "./context/BookingContext";

export const Layout = () => {
  const [restaurantBookings, setRestaurantBookings] = useState<IBooking[]>();

  const initialBookingState: IBookingReducer = {
    bookings: [],
    userInput: "",
  };

  const [state, dispatch] = useReducer(BookingReducer, initialBookingState);

  useEffect(() => {
    if (restaurantBookings) return;

    const getData = async () => {
      const bookingsResponse = await getBookings();
      console.log(bookingsResponse);
      if (shouldUpdate) {
        setRestaurantBookings(bookingsResponse);
      }
    };

    let shouldUpdate = true;

    getData();

    return () => {
      shouldUpdate = false;
    };
  }, [restaurantBookings]);

  return (
    <>
      <header>{<Navigation />}</header>
      <main>
        <BookingContext.Provider value={{ bookings: state.bookings, dispatch }}>
          <Outlet />
        </BookingContext.Provider>
      </main>
      <footer></footer>
    </>
  );
};
