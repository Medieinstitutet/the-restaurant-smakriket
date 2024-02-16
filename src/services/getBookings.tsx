import axios from "axios";
import { IBookingResponse } from "../models/IBookingResponse";

export const getBookings = async (id: string = "65c65652e125e85f5e15b7bf") => {
  const response = await axios.get<IBookingResponse>(
    `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${id}`
  );

  return response.data;
};
