import React, { useState } from 'react'
import HobbyContainer from './HobbyContainer';

const HobbyCreator = () => {

    let [hobby, setHobby] = useState([{id:0, hobby:"Don't Dream", description:"A song by Sixpense None The Richer" , isActive:false}, {id:1, hobby:"Hello", description:"A song by Adele" , isActive:false}]);
    let [currentHobby, setCurrentHobby] = useState({id:2, hobby:"", description:"No Description" , isActive:false});
    
    const CreateHobbyHandler = () =>{

      if(currentHobby.hobby.length > 0){

        const newId = currentHobby.id + 1

        let newHobby = {...currentHobby, id:newId}

        setHobby([newHobby,...hobby])

        setCurrentHobby({...newHobby, hobby:""})
        
      }
    }
    console.log(hobby)

    const hobbyHandler = (e) =>{
        setCurrentHobby({...currentHobby, hobby: e.target.value})
    }



  return (
    <div  className="hobby__creator">
        <input type="text" onChange={hobbyHandler} value = {currentHobby.hobby} placeholder='Enter Your Hobbies'/>
        <button onClick={CreateHobbyHandler}>Create</button>

        <HobbyContainer hobby={hobby} setHobby={setHobby} />
    </div>
  )
}

export default HobbyCreator