export interface IBooking {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICostumer;
}

interface ICostumer {
  name: string;
  lastname: string;
  email: string;
  phone: string;
}
