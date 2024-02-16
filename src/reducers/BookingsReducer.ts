import { Booking, Customer } from "../models/Booking";

export interface IAction {
  type: ActionType; // Typen av åtgärd
  payload: string; // Data för åtgärden, i detta fall en sträng
}

// Här har vi två typer av åtgärder: ADDED och TYPED.
export enum ActionType {
  ADDED, // Lägg till en ny bokning
  TYPED, // Skriv in användarindata
}

// Här specificerar vi att reducer-tilståndet ska innehålla en array av bokningar och en sträng för användarindata.
export interface IBookingReducer {
  bookings: Booking[];
  userInput: string;
}

// Reducer-funktionen tar två parametrar: det aktuella tilståndet och den utförda åtgärden.
export const BookingReducer = (state: IBookingReducer, action: IAction) => {
  // Använd en switch-sats för att hantera olika typer av åtgärder.
  switch (action.type) {
    // Om åtgärdstypen är ADDED, lägg till en ny bokning till den aktuella listan av bokningar.
    // Skapa en ny bokningsinstans med den användarindata som finns i tilståndet.
    case ActionType.ADDED:
      const newBooking = new Booking(
        "65c65652e125e85f5e15b7bf", // restaurantId
        state.userInput, // date
        state.userInput, // time
        +state.userInput, // numberOfGuests (konvertera till number)
        new Customer(
          state.userInput, // name
          state.userInput, // lastname
          state.userInput, // email
          state.userInput // phone
        )
      );
      // Returnera en ny version av tilståndet med den nya bokningen tillagd och användarindatan återställd.
      return {
        ...state,
        bookings: [...state.bookings, newBooking], // Lägg till den nya bokningen i listan av bokningar
        userInput: "", // Återställ användarindata efter bokning
      };

    case ActionType.TYPED:
      // Om åtgärdstypen är TYPED, uppdatera användarindatan i tilståndet med den nya datan från payload.
      // Returnera en ny version av tilståndet med den uppdaterade användarindatan.
      return { ...state, userInput: action.payload };

    default:
      // Om åtgärdstypen inte matchar någon av de tidigare fallen, returnera det aktuella tilståndet utan att göra några ändringar.
      return state;
  }
};
