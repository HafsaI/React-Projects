import React from 'react' 
import ChoosingBar from './ChoosingBar'
import '../styles/header.css'

export default function Header(){
    return ( 
        <div className = 'center'>
        <h1 className = 'font-m heading '>Country Wide </h1> 
        {/* <SearchBar/> */}
        <ChoosingBar/> 
       
        </div>
        
    )
}



// import '../styles/header.css'
// // import { useState } from 'react'

// export default function SearchBar(){
//     // const [query, setQuery] = useState('');
//     return ( 
//         <div className='search--bar' >
        
//         <input className = 'input--bar' type = 'text' placeholder='Search event..'  />
//         <img src="../images/search.svg" className="search--logo" /> 
       
//         {console.log(query)} 
//         </div>
        
//         )
//     }