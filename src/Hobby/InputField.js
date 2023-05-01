import React, { useState } from 'react'
import "./HobbyContainer.css"

function InputField({hobby, setHobby, id, hobbyTitle}) {

    const [updateDescription, setUpdateDescription] = useState("");
    

    const handleUpdate = (e) =>{
        setUpdateDescription(e.target.value)
    }


    const descriptionHandler = () =>{

        const updatedDescription = hobby.map(elem =>{
            if(updateDescription.length > 0){
                 if(elem.id === id){
                elem.description = updateDescription;
                elem.isActive = false;
            } 
            } 
            else {
                elem.description = "No Description"
                elem.isActive = false;
        }
            return elem
        })
        setHobby(updatedDescription)
    }

    const cancelHandler = () =>{
        const updatedDescription = hobby.map(elem =>{

                 if(elem.id === id){
                elem.isActive = false;
            } 
            return elem;
            
    })
    setHobby(updatedDescription)

}
    
  return (
    <div className='hobby__description__container'>

        <input type="text" placeholder='Enter Description' onChange={handleUpdate} />
        <button onClick={descriptionHandler} >Submit</button>
        <button onClick={cancelHandler} >Cancel</button>

    </div>
  )
}

export default InputField