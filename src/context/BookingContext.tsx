import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext } from 'react';





interface ReservevationData {

    children?:  false | ReactNode;
    restaurantId?: string,
    date?: string,
    setDate:  Dispatch<SetStateAction<string>>,
    time?: string,
    setTime:  Dispatch<SetStateAction<string>>,
    numberOfGuests?: number,
    setNumberOfGuests:  Dispatch<SetStateAction<number>>,

  
      name?: string,
      setName:  Dispatch<SetStateAction<string>>,
      lastName?: string,
      setLastName:  Dispatch<SetStateAction<string>>,
      email?: string,
      setEmail:   Dispatch<SetStateAction<string>>,
      phone?:string
      setPhone:   Dispatch<SetStateAction<string>>,

      reservationId?: string,
      setReservationId:  Dispatch<SetStateAction<string>>,
  
  

      error?: string,
      setError:  Dispatch<SetStateAction<string>>,
  

   }

   interface Props{
    children: ReactNode


   }






export const BookingContext = createContext<ReservevationData | undefined>(undefined);


export const BookingProvider = ({ children }: Props) => {
    const restaurantId:string = '65c65652e125e85f5e15b7bf';
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [numberOfGuests, setNumberOfGuests] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState('')
const [reservationId, setReservationId] = useState('523-564')

    return (
        <BookingContext.Provider value={{ error, setError, restaurantId, date, setDate, time, setTime, numberOfGuests, setNumberOfGuests, name, setName, lastName, setLastName, email, setEmail, phone, setPhone, reservationId, setReservationId}}>
            {children}
        </BookingContext.Provider>
    );
};

export const UseBookingContext = (): ReservevationData => {
    const context = useContext(BookingContext);
    if (!context) {
      throw new Error('useProductListContext must be used within a ProductListProvider');
    }
    return context;
  };
  