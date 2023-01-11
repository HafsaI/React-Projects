import '../styles/constants.css'
import '../styles/gallery.css'
// import { useState, useEffect } from "react";
// import Axios from 'axios';
// import {BrowserRouter as  Route, Routes} from "react-router-dom";
import React from 'react'

export default function Footer(){

    return (
      <footer>
        <div className = 'float--left col'>
        <h6>NICE TO MEET YOU</h6>
        <p >We design leather planner, minmial planner inserts, stickers, sticky notes and more.</p>
        <h2>Nolas</h2>
         </div>

        <div className = 'float--mid col'>
        <h6>HELP & FAQ</h6>
        <p  >Faqs</p>
        <p>Contact Us</p>
        
         </div>

         <div className="float--right col2">
          <a href="https://github.com/digitalocean"><img src="../images/mail.svg" className="icon-style" alt="email icon"/></a>
          <a href="https://www.twitter.com/DigitalOcean"><img src="../images/facebook.svg" className="icon-style" alt="facebook icon"/></a>
          <a href="https://www.twitter.com"><img src="../images/instagram.svg" className="icon-style" alt=" instagram icon"/></a>
        </div>
      
     </footer>
 


   
     

    )
}

{/* <a href="mailto:hege@example.com">hege@example.com</a></p> */}