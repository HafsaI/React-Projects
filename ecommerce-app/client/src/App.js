import React from 'react'
import {BrowserRouter as  Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';

import FrontPage from './pages/FrontPage';

import Product from './pages/Product';
import Cart from './pages/Cart';
import All from './pages/All';





function App() {
  
  return (
    <div className="App">
      <div >
             <Navbar/>
                <div >
                <Routes>
                <Route path = "/" element = {  <FrontPage/> } />
                <Route path="/journals" element = {   <All/> }  />
                <Route path="/cart" element = {  <Cart/> }  />
                <Route path="/products/:id" element = {  <Product/> }  />
                </Routes>
                </div>
          </div>
       {/* <FrontPage/> */}
      
     
    </div>
  );
}

export default App;




















