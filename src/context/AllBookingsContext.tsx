import { Dispatch, createContext } from "react";
import { Booking } from "../models/Booking";
import { IAction } from "../reducers/BookingsReducer";

// Här specificerar vi att kontexten måste innehålla en array av bokningar och en funktion för att skicka åtgärder (dispatch)
export interface IAllBookingContext {
  bookings: Booking[]; // En array av bokningar
  dispatch: Dispatch<IAction>; // En funktion som tar emot åtgärder och skickar dem till reducer-funktionen
}

// Här anger vi att kontexten ska innehålla ett objekt som överensstämmer med IBookingContext-gränssnittet.
// Om ingen data tillhandahålls när kontexten konsumeras kommer den här som standard att innehålla en tom array för bokningar och en tom funktion för dispatch.
export const AllBookingContext = createContext<IAllBookingContext>({
  bookings: [],
  dispatch: () => {},
});
