import '../styles/blocks.css'
import React  from 'react';
// import { Data } from './data';
import { FiPlus, FiMinus } from 'react-icons/fi'
import { useState, useEffect } from "react";
import Axios from 'axios';
// import {BrowserRouter as  Route, Routes} from "react-router-dom";


export default function Faqs(){
  const [clicked, setClicked] = useState(false);
  const [listOfFaqs, setListOfFaqs] = useState([]);


  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/getFaqs").then((response) => {
      setListOfFaqs(response.data); // catch data sent by server
    });
  }, []);
  // console.log(listOfProducts);

    return (
        <div className='accordian-section'>
         <div className='container'>
         {listOfFaqs.map((item, index) => {
         
            return (
              <div key={index}>
                <div className='wrap' onClick={() => toggle(index)} key={index} >
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>

                {clicked === index ? (
                  <div className = 'dropdown'>
                    <p className='faq-p'>{item.answer}</p>
                    </div>
                ) : null}
                
              </div>
            );
          })}
        
          </div>
        </div>
        

    )
}