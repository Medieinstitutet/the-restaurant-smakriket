import axios from "axios";
import { IBookingResponse } from "../models/IBookingResponse";
import { UseGlobalContext } from "../context/GlobalContext";
import { UseBookingContext } from "../context/BookingContext";
import { IBooking } from "../models/IBookings";



export const GetBookings = async (id: string = "65c65652e125e85f5e15b7bf") => { 
  const {setError, setBookings } = UseBookingContext();
  const {setLoading } = UseGlobalContext();


  try {
    setLoading(true)
    const response = await axios.get<IBooking[]>(
      `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${id}`
    );

    setBookings(response.data)
   
  } catch (error) {
   
    setError('något gick fel')
  } finally {
    setLoading(false)
  
  }


};
