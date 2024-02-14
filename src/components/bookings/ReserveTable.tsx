import  {  useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment, { Moment } from "moment";
import { DatePickerComponent } from './DatePickerComponent';
import { DropDown } from './DropDown';

const ReserveTable = () => {
    const [selectedDate, setSelectedDate] = useState<Moment>(moment());
    const [persons, setPersons] = useState<number>(1)
  const [findBookings, setFindBookings] = useState<Tables[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  
  
  interface Tables {
    table: string
  }
  
  
  /* Find tables */
  const onClickFindTables = () => {
    console.log(persons, selectedDate)
  
    if(selectedDate && persons){
  setFindBookings([{table:'18:00'} , {table:'21:00'}])
    }else{
  setErrorMessage('inga bord')
    }
  }
  
  
  /* Reserve table */
  
  const onClickReserveTable = () =>{
  
  setFindBookings([])
  
  
  
  }



  return (
    <section className="reserveContainer"> 
<section className="reserveContainer___inputs"> 
<section className='dropDownContainer'>
<DropDown setPersons={setPersons}  />
</section>
    <LocalizationProvider dateAdapter={AdapterMoment} >
    <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
</LocalizationProvider>
<button className="bookingBtn" onClick={onClickFindTables}> Hitta lediga bord</button>
</section>
<section className="reserveContainer___meassages">

  {findBookings.length >= 1 && errorMessage === '' ?

<> 
{findBookings.map((item) =>{return(
<button className="reserveContainer___meassages___timeBtn" onClick={onClickReserveTable}> {item.table} </button>)
}
)}

</>
:
 <p> {errorMessage} </p>

}
</section>



    </section>
  )
}

export default ReserveTable