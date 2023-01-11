import { useState, useEffect } from "react";
import Axios from 'axios';
import { Data } from './data';
import '../styles/gallery.css'
import Card from '../components/Card'
export default function All(){
    const [listOfProducts, setListOfProducts] = useState([]);
    //inside this: api call to backend
    useEffect(() => {
      Axios.get("http://localhost:3001/getProducts").then((response) => {
        setListOfProducts(response.data); // catch data sent by server
      });
    }, []);
    
    const products = listOfProducts.map(item => {
        
        if (item.available === true){
            return (
                <Card 
                    key={item.id}
                    {...item}
                    
                />
            )
        }
      
      
    })
    return(
        <div className="all--list">
            {products}
        </div>
    )

}
