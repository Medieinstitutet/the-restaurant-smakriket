import React from 'react'
interface Props{
    setReservationFlow:(selectedDate:string) => void
  }

export const ModifyOrDelete = ({setReservationFlow}:Props) => {

const OnCklickChange = (): void =>  {

    setReservationFlow('modify-date-persons')
}


  return (
    <section className='ModifyOrDeleteContainer'>
<button onClick={OnCklickChange}>Ändra</button>
<button>Radera</button>

    </section>
  )
}
