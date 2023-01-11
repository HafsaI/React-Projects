import React from "react"
import {NavLink} from "react-router-dom"
import { Badge} from "@material-ui/core";

import '../styles/constants.css'
import { useSelector } from "react-redux"
export default function Navbar() {
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity)

    return (
        <nav >
           
            <h6>Nolas</h6>
           
           
          
           
            <NavLink
            to="/" className = "nav--links"
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "lighter"
            })}
            
            >
            Home
            </NavLink>

            
            <NavLink
            to="/journals" className = "nav--links"
            style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "lighter"
            })}
           
            >
            All Products
            </NavLink>
            
           <div className="whole--bar">
            <div className="search--bar">
           <input className="input--bar" placeholder="Search"></input>
           <img alt = 'search' src="../images/search.svg" className="search--logo"  />
           </div>

          
           <NavLink
            to="/cart" className = "nav--linklogo">
            <img src="../images/shopping-cart.svg" alt = 'cart' className="cart--logo" />
            <Badge className="menu--item" badgeContent={quantity} color="primary"></Badge>
            </NavLink>
           
           {/* <input className = 'input--bar' type = 'text' placeholder='Search event..'   
            onChange={ e => setQuery(e.target.value)} 
            onKeyPress={(ev) => { if (ev.key === "Enter") { filterItem(query) }}}/>

            <img alt = 'search' src="../images/search.svg" className="search--logo" onClick={() => filterItem(query)} /> */}
           </div>


        </nav>
    )
}
