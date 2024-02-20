import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { IBooking } from "../models/IBookings";

export const deleteBooking = async (id: string, setError: Dispatch<SetStateAction<string>>) => {
  try {
    const res = await axios.delete<IBooking>(`https://school-restaurant-api.azurewebsites.net/booking/delete/${id}`);
    setError("Reservation uppdaterad");
  } catch (error) {
    setError("något gick fel");
    console.log(error);
  } finally {
    setTimeout(() => {
      setError("");
    }, 3000);
  }
};
