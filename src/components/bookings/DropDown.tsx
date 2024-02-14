

interface Props{

  setPersons:(persons:number) => void
}


export const DropDown = ({setPersons}:Props) => {
    const person = [1, 2, 3, 4, 5, 6];
    


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedPerson = parseInt(e.target.value);
      setPersons(selectedPerson)
    };
  
    return (
      <section className='dropDownContainer'>
        <label htmlFor="persons">Antal personer</label>
        <select id="persons" onChange={handleChange}>
          
          {person.map((person) => (
            <option value={person} key={person} >
              {person}
            </option>
          ))}
        </select>
      </section>
    );
  };