import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import NavLogo from "../assets/logo.png"
import { useState } from 'react';
const Nav = () => {
const[menuOpen,setMenuOpen] = useState(false)
  return (
   
    <>
  
   <nav>
    <div className="nav__container">
      <a href="/" className="nav__img__wrapper">
        <img src= {NavLogo} alt="" className="nav__img" />
      </a>
      <div className="nav__links">
        <a href="/" className="nav__link" onClick={()=>{
          setMenuOpen(false)
        }}>Home
        </a>
        <a href="/models" className="nav__link" onClick={()=>{
          setMenuOpen(false)
        }}>Vehicle Models
        </a>
        <a href="#" className="nav__link disabled" onClick={()=>{
          setMenuOpen(false)
        }}>Testimonials
        </a>
        <a href="#" className="nav__link disabled" onClick={()=>{
          setMenuOpen(false)
        }}>Our team
        </a>
        <a href="#" className="nav__link disabled" onClick={()=>{
          setMenuOpen(false)
        }}>Contact
        </a>
      </div>
      <div className="nav__buttons">
        <a href="" className="nav__link disabled">
          Sign In
        </a>
        <button className="nav__btns__register disabled">
          Register
        </button>
      </div>
      <button className="nav__menu" onClick={()=>{
   setMenuOpen(true)
    console.log(menuOpen)
       
      }}>
      <FontAwesomeIcon icon={faBars}/>
      </button>
    </div>
   </nav>
   <nav className={`menu ${menuOpen==true && "menu-open"}`}>
    <button className="menu__close"
    onClick={()=>{
setMenuOpen(false)
    }}
    > 
    <FontAwesomeIcon icon={faTimes}/>
    </button>
    <div className="menu__links">
      <a href="" className="menu__link disabled">
        Home
      </a>
      <a href="" className="menu__link disabled">
        Vehicle Models
      </a>
      <a href="" className="menu__link disabled">
        Testimonials
      </a>
      <a href="" className="menu__link disabled">
        Our Team
      </a>
      <a href="" className="menu__link disabled">
        Contact
      </a>
    </div>
   </nav>
   </>
  );
}

export default Nav;

