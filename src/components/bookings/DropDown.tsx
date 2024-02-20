import { useBookingContext } from "../../context/BookingContext";


interface Props{

  setPersons:(persons:number) => void
}


export const DropDown = ({setPersons}:Props) => {
    const person = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15];
    
    const {numberOfGuests,setNumberOfGuests} = useBookingContext();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedPerson = parseInt(e.target.value);
      setPersons(selectedPerson)
      setNumberOfGuests(selectedPerson)
    };
  
    return (
      <section className='dropDownContainer'>
        <label htmlFor="persons">Antal personer</label>
        <select id="persons" onChange={handleChange} value={numberOfGuests}>
          
          {person.map((person) => (
            <option className="number" value={person} key={person} >
              {person}
            </option>
          ))}
        </select>
      </section>
    );
  };