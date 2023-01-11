// import Navbar from '../components/Navbar';
import Card from '../components/Card'
import Footer from  '../components/Footer'
import Faqs from  '../components/Faqs'
import Submit from  '../components/Submit'
import { Data } from './data';

import '../styles/constants.css'
import '../styles/blocks.css'
import '../styles/gallery.css'
import { useState, useEffect } from "react";
import Axios from 'axios';
// import {BrowserRouter as  Route, Routes} from "react-router-dom";


export default function FrontPage(){
    const [listOfProducts, setListOfProducts] = useState([]);
    //inside this: api call to backend
    useEffect(() => {
      Axios.get("http://localhost:3001/getProducts").then((response) => {
        setListOfProducts(response.data); // catch data sent by server
      });
    }, []);
   
  
    const cards = listOfProducts.map(item => {
      if (item.available === true){
        return (
            <Card 
                key={item.id}
                {...item}
                
            />
        )
    }
    return null
  })

    return (
        <div >
          

        <div className='bottom--hero'>
          <div className='videodiv'>
            <video  height="700"  loop autoPlay muted src="../images/ocean.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>

           <h5 className='middle-title'> Our Favourites</h5>
          <div className = 'all--list'>
            {cards}
          </div>
        
      
       
       
          <div className='faq--section'>
            <h6>  FAQS</h6>
              <div className='frontpage--ff'>
              <Submit/>
              <Faqs/>
              </div>
          </div>
         
         
          
          </div>
          <Footer/>
        </div>

    )
}



// "title": "Leather Yearly Journal",
// "description": "black color",
//  "available": "true",
// "imageUrl": "../images/yearly_journal.jpg",
// "price": "PKR 2500"