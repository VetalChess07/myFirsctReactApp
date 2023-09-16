import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarcMode from '../../utils/detectDarcMode';

import React from 'react'
import './btnDarkMode.css'
import moon from "../../img/icons/moon.svg";
import sun from "../../img/icons/sun.svg";


const BtnDarkMode = () => {

    const btnRef =useRef(null)



  const [darkMode, setDarkMode] = useLocalStorage(
    'darkMode', 
    detectDarcMode()
 ); 

   useEffect(() =>{
    if(darkMode === 'dark'){
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else{
      document.body.classList.remove('dark')      
      btnRef.current.classList.remove('dark-mode-btn--active')
    } 
  
    }, [darkMode])


   const toggleDarkMode =() =>{
    

      setDarkMode((currentValue) =>{
        return currentValue === 'light' ? 'dark' :'light'
      } )
   }

  return (
   
   <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
  
   <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
   <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
 </button>
  )
}

export default BtnDarkMode
