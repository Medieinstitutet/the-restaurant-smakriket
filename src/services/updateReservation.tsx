

import {  Dispatch, SetStateAction } from "react";
import axios from 'axios';
import { UpdateBooking } from "../models/UpdateBooking";






export const updateReservation = async(id:string, bookingData:UpdateBooking, setError:Dispatch<SetStateAction<string>>) => {


  
  
    try {
   
   const res = await axios.put<UpdateBooking>(`https://school-restaurant-api.azurewebsites.net/booking/update/${id}`, bookingData)
   setError('Reservation uppdaterad')
  
    return res.data
     
    } catch (error) {
     setError('något gick fel')
    console.log(error)
    } finally{
        setTimeout(() => {
            setError('')
             }, 3000);

    }
}
