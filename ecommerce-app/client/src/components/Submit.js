import React, { useState } from "react"
import Axios from 'axios'
import '../styles/blocks.css'

export default function Submit(props) {
    const [newQuestion, setNewQuestion] = useState('');
    const [answer, setAnswer] = useState('')

    const addQuestion = (event) => {
        Axios.post("http://localhost:3001/addQuestion", {
            question: newQuestion,
            answer: answer
            //requires refreshing page
          })
        
    }

   
    const handleQChange = (event) => {
        setNewQuestion(event.target.value)
      }
    return (
        
        <form >
        <p className="form--p">Have another question?</p>
      <input className = 'form--inputs' placeholder="Name"></input>
      <input className = 'form--inputs' placeholder="Email Address"></input>
      <input className = 'form--inputs2' placeholder="What is your question?"  value={newQuestion}
      onChange={handleQChange}/>
        <button onClick={addQuestion} className="form--button"> Submit</button>

        </form>
        
            
      
    )
}
