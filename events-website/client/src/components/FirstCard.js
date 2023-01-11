import React from "react"
import '../styles/gallery.css'

export default function FirstCard(props) {
    return (
        
        <div className="card">
       <img 
                src={props.imageUrl}
                className = 'card-img1'
                href = {props.link}
                target="_blank"
        />
        <div className = 'card--info'>
        <h1 className="card-title ">{props.title}</h1>
        <p className="card-desc">{props.description}</p>
        <p className="card-date">{props.date}</p>
        <p className="card-location">{props.location}</p>
        </div>
        
            
      
      </div>
    )
}
