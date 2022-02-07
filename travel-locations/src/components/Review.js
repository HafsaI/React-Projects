import React from "react"
// import plusbutton from "../images/plus-circle.svg"
import ReviewForm from "./ReviewForm"


export default function Review(props) {
    function openReviewForm(){
        console.log("hello")
    }
    return(
        
        <div  className = "review--container">
            <img onClick = {openReviewForm} src= "../images/plus-circle.svg" className="plus--icon" />
            <span  className="review--text" > Add an experience </span> 
        </div>

    )

}