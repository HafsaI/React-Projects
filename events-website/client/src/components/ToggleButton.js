import React, { useState, useEffect } from 'react';
import '../styles/index.css'

export default function ToggleButton() {
  // isActive = True = Extract Logs = True
  const [isReport, setIsReport] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsReport(current => !current);
  }
  setIsReport = () => {

    this.setState({isReport: "black"});

  }
 
  useEffect(() => {
    // Update the document title using the browser API
    if (window.innerWidth <= 600){
      setIsMobile(true);
      // console.log('true');
      // <h1>true</h1> 

    }
    else {
      setIsMobile(false);

    }
  });
  return (

    <div>
    
      
          <div> 
        
            {
              isMobile? isReport? 
              <h1>report here</h1> : <h1> report not here</h1> :   <div> <h1>report here</h1> <h1> report not here</h1> </div>

            } 

          </div>
                    <div className="t-form-box">
                    <div className="t-button-box">
                      <div className="t-btn" style={{
                          left: isReport ? '115px' : '0',
                        }} ></div>
                      <button  
                      type="button" className="t-toggle-btn" 
                      style={{
                        color: isReport ? 'black' : 'white',
                      }}
                      onClick = {handleClick}>Extract Logs</button>
                      <button 
                    
                      type="button" className="tr-toggle-btn" 
                      style={{
                        color: isReport ? 'white' : 'black',
                      }}
                      onClick={handleClick}>Report</button>
                    </div>
                  </div>
           
  </div>
  );
}