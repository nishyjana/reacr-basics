
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'


export default function Button(){
const [count, setCount] = useState(0);
const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banana');

  
 const  countDrement=()=>{
     setCount(count-1);
     setAge(age+1);
     setFruit('apple');
     
     
    
  }
 const countIncrement=()=>{
    setCount(count+1)
    setAge(age-1);
     setFruit('orange');
    
  }
  return(
    <Fade left cascade>
        <div>
           
       <p>you clicked in {count} age {age} fruit {fruit}</p>
           
           
           <div className="button">
                  <div className="button-decrease">
           
                      <button 
                         onClick={()=>{countDrement() }}>  decrease
                      </button>
           
                  </div>
                  <div className="button-increase">
                      <button 
                        onClick={()=>{countIncrement() }}> increase
                      </button>
                  </div> 
             </div>
           
           
        </div>
          
   
    
    </Fade>
      
  
  
  )
}