import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { IBooking } from "../models/IBookings";

export const deleteBooking = async (id: string, setError: Dispatch<SetStateAction<string>>) => {
  try {
     await axios.delete<IBooking>(`https://school-restaurant-api.azurewebsites.net/booking/delete/${id}`);
    setError("Reservation borttagen");
  } catch (error) {
    setError("något gick fel");
    console.log(error);
  } 
};
