import React from "react"

export default function Card(props) {
  
    
    return (
        <div className="card">
            
            <img 
                src = {props.imageUrl}
                className="card--image" 
            />
            <div className = "card--info" >
                <div className = "card--loc">
                    <i className="fas fa-map-marker-alt pink"></i>
                    <span className="bold card--location ">{props.location}  </span>
                    <a className="card--map gray" href={props.googleMapsUrl} target="_blank"> <span>View on Google Maps</span></a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <div className="card--stats">
                <span className="bold">{props.startDate} - </span>
                <span className="bold">{props.endDate}</span>
                 </div>
                 <p className="card-desc">{props.description}</p>
            </div>
           
        </div>
    )
}


//   let badgeText
//     if (props.openSpots === 0) {
//         badgeText = "SOLD OUT"
//     } else if (props.location === "Online") {
//         badgeText = "ONLINE"
//     }


//   <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.stats.rating}</span>
//                 <span className="gray">({props.stats.reviewCount}) • </span>
//                 <span className="gray">{props.location}</span>
//             </div>
           
//             <p className="card--title">{props.title}</p>
//             <p className="card--price">
//                 <span className="bold">From ${props.price}</span> / person
//             </p>