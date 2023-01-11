import React from "react"
import '../styles/gallery.css'

export default function Card(props) {
    return (
        
        <div className="card">
        <a href={props.link} target="_blank">
       <img 
                src={props.imageUrl}
                className = 'card--img'
        />
        </a>
        <div className="card--info">
        <h2 className="card--title">{props.title}</h2>
        <p className="card--desc">{props.description}</p>
        <p className="card--date">{props.date}</p>
        <p className="card--location">{props.location}</p>
        </div>
        
            
      
        </div>
    )
}


