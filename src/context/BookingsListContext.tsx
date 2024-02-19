import { createContext } from "react";
import { IBooking } from "../models/IBookings";

export interface IBookingsListContext {
  bookings: IBooking[];
}

export const BookingsListContext = createContext<IBookingsListContext>({
  bookings: [],
});
