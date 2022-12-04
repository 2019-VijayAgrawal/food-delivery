import React from 'react';
import {} from "@mui/material";
import {SearchRounded,ShoppingCartRounded,BarChart} from "@mui/icons-material";
import { useEffect } from 'react';
import img from './image/logo.png';
import imp from './image/profile.jpg';



function Header() {

  useEffect(() => {
     const toggleMenu = document.querySelector(".toggleMenu");

     toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
        
    })
  }, []);

  return (
    <header>
       <img src = {img} alt=''  className='logo'/>
       

       <div className='inputBox'>
         <SearchRounded className="searchIcon"/>
         <input type="text" placeholder="Search"/>
       </div>
       <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className="cart_content">
            <p>2 </p>
          </div>
       </div>

       <div className="profileContainer">
        <div className="imageBox">
            <img src={imp} alt=""  className='profilePic' />
        </div>
        <h1 className="userName">Pradeep Chaurasiya</h1>
       </div>

       <div className="toggleMenu">
       <BarChart className="toggleIcon" />
       </div>
    </header>
  )
}

export default Header;