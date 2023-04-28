import React from 'react'
import "./HobbyContainer.css"
import InputField from './InputField'

function HobbyContainer({hobby, setHobby}) {

    const checkBoxHandler = (i) =>{


       let newHobby = hobby.map(elem =>{
        if(elem.id ===i) elem.isActive = ! elem.isActive;
           return elem
        })
        setHobby(newHobby)
    }

  return (
    hobby.map((elem, i) =>{
        return<div className='hobby' key={i}>
          <div className="hobby__description">
          <input type="checkbox" name="" id={i} onClick={checkBoxHandler.bind(this, elem.id)} checked = {elem.isActive} onChange={e => {}}/> 
          <label htmlFor={i}><h1>{elem.hobby}</h1></label>
          </div>
        

        <div className="about__hobby">
           {elem.isActive ? <InputField hobby ={hobby} setHobby ={setHobby} id={elem.id } hobbyTitle = {elem.hobby}/>   : elem.description}
        </div>

        
        </div>
    })
  )
}

export default HobbyContainer