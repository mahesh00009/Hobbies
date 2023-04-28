import React, { useState } from 'react'
import HobbyContainer from './HobbyContainer';

const HobbyCreator = () => {

    let [hobby, setHobby] = useState([]);
    let [currentHobby, setCurrentHobby] = useState({id:0, hobby:"", description:"hello" , isActive:false});
    
    const CreateHobbyHandler = () =>{

      if(currentHobby.hobby.length > 0){

        const newId = currentHobby.id + 1

        let newHobby = {...currentHobby, id:newId}

        setHobby([newHobby,...hobby])

        setCurrentHobby({...newHobby, hobby:""})
        
        console.log("created")
      }
    }
    console.log(hobby)

    const hobbyHandler = (e) =>{
        setCurrentHobby({...currentHobby, hobby: e.target.value})
    }



  return (
    <div>
        <input type="text" onChange={hobbyHandler} value = {currentHobby.hobby}/>
        <button onClick={CreateHobbyHandler}>Create</button>

        <HobbyContainer hobby={hobby} setHobby={setHobby} />
    </div>
  )
}

export default HobbyCreator