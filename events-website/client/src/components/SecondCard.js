import React from "react"
import '../styles/gallery.css'

export default function SecondCard(props) {
    return (
        
        <div className="card">
       <img 
                src={props.imageUrl}
                className = 'card-img2'
                href = {props.link}
                target="_blank"
        />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-desc">{props.description}</p>
        <p className="card-date">{props.date}</p>
        <p className="card-location">{props.location}</p>

        
            
      
      </div>
    )
}
