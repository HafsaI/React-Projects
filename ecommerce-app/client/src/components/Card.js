import React from "react"
import '../styles/gallery.css'
import {NavLink} from "react-router-dom"

export default function Card(props) {
    return (
        <div className="card">
            
            <NavLink
        to= {`/products/${props._id}`} className = "nav--links">
            <img src={props.imageUrl} alt = "product" className = 'card--img'/>
            
            <div className="card--info">
                <h2 className="card--title">{props.title}</h2>
                <p className="card--price"> PKR {props.price}</p>
                {/* <p className="card--date">{props.date}</p>
                <p className="card--location">{props.location}</p> */}
            </div>
        </NavLink>
            
      
        </div>
    )
}
