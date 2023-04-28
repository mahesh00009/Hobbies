import React, { useState } from 'react'

function InputField({hobby, setHobby, id, hobbyTitle}) {

    const [updateDescription, setUpdateDescription] = useState("");
    

    const handleUpdate = (e) =>{
        setUpdateDescription(e.target.value)
    }

    const descriptionHandler = (e) =>{

        const updatedDescription = hobby.map(elem =>{
            if(elem.id === id){
                elem.description = updateDescription;
                elem.isActive = false;
            }

            return elem
        })
        setHobby(updatedDescription)
    }
    
  return (
    <div>

        <input type="text" placeholder='Enter Description' onChange={handleUpdate} />
        <button onClick={descriptionHandler} >Submit</button>

    </div>
  )
}

export default InputField