import React from 'react'
import './navbar.css'

import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

const Navbar = () => {

  const isActiveLink = 'nav-list__link nav-list__link--active';
  const isNoActiveLink = 'nav-list__link ';


  return (
   <nav className="nav">
   <div className="container">
     <div className="nav-row">
    
        <NavLink to='/'  className="logo">
             <strong>Freelancer</strong> portfolio
        </NavLink>
      
      <BtnDarkMode/>

     

       <ul className="nav-list">
         <li className="nav-list__item">
          <NavLink to='/' className={({isActive}) =>{
            return isActive ? isActiveLink : isNoActiveLink;
          }}>
             Home
          </NavLink>
          
            
           
         </li>
         <li className="nav-list__item">
         <NavLink to='/projects' className={({isActive}) =>{
            return isActive ? isActiveLink : isNoActiveLink;
          }}>
              Projects
          </NavLink>
        
         </li>
         <li className="nav-list__item">
         <NavLink to='/contacts' className={({isActive}) =>{
            return isActive ? isActiveLink : isNoActiveLink;
          }}>
             Contacts
          </NavLink>
          
         </li>
       </ul>
     </div>
   </div>
 </nav>
  )
}

export default Navbar
