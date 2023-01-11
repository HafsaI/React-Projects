import React from "react"
import '../styles/gallery.css'
import Card from "./Card"
import data from "../data"
// or "../components/Cards"

export default function EventGallery() {
  
    // const card1 = data.map(item => {
    //     if (item.id ==1)
    //     return (
    //         <FirstCard className = 'first--card'
    //             key={item.id}
    //             {...item}
                
    //         />
    //     )
    // })
    // const card2 = data.map(item => {
    //     if (item.id ==2)
    //     return (
    //         <SecondCard
    //             key={item.id}
    //             {...item}
                
    //         />
    //     )
    // })
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
                
            />
        )
    })
    
    return (
       
   
        <div className = "row--cards">
            {cards}
        </div>
       
    )
}

        //   <Card imageUrl = "../images/summerfest.png"/>
