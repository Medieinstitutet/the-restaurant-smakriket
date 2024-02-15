import React, { useState } from 'react'
import { UseGlobalContext } from '../../context/GlobalContext';
interface Props{
    login: boolean; 
    setLogin:(login:boolean) => void
    setReservationFlow:(selectedDate:string) => void
  }
  

export const Login = ({setReservationFlow }:Props) => {
    const [id, setId] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState('')
    
    const {adminLogin, setAdminLogin} = UseGlobalContext()
  
    
    
    console.log(import.meta.env.VITE_USERNAME,
      import.meta.env.VITE_PASSWORD)
    
    
    const OnClickSignIn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(id && password){
    if(id === import.meta.env.VITE_USERNAME && password === import.meta.env.VITE_PASSWORD){
        setAdminLogin(true)
    setId('')
    }else{
    setError('Fel username eller lösenord')
    setTimeout(() =>setError(''), 3000)
    }}}
    
    /* ta bort sen */
    
    const array = [11111,22222,33333]
    
    const OnClickSearch = (e: React.FormEvent<HTMLFormElement>): void =>  {
      e.preventDefault()
    
      if(id){
    const item = array.filter(item => item === +id)
      if(item.length >= 1){
        setReservationFlow('modify')
        setAdminLogin(true)
   
      }else{
      setError('Reservation hittas inte')
      setTimeout(() =>setError(''), 3000)
      }}
    
      }





  return (
    <form className="signinContainer___signin___form" onSubmit={!adminLogin ? OnClickSignIn : OnClickSearch}>

    <div>
            <label htmlFor="id">  {!adminLogin ? 'Admin:': 'Reservationsnummer:' } </label>
            <input 
              type="text" 
              id="id" 
              name="id" 
              value={id} 
              onChange={(e) => setId(e.target.value)} 
              required 
              minLength={4}
              maxLength={30}
            />
          </div>
          {!adminLogin ?
          <div>
          
        
            <label htmlFor="password">Lösenord:</label>
            <input 
              type="text" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              minLength={3}
              maxLength={10}
            />  
          </div>: '' }
    <button type='submit'>{!adminLogin ? 'Logga in' : 'Sök'}</button>
    <p className='signinContainer___signin___form___error'>{error}</p>
    
    </form>
  )
}
