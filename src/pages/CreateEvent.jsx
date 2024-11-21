import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../services/api"

const CreateEvents = () =>{
   const navigate = useNavigate()
   const [event, setEvent] = useState({name: '', description: ''});

   const handleClick = () =>{
      createEvent(event)
      navigate('/')
   }

   return(
      <div>
         <label>
            Event Name: <input type="text" placeholder="name" maxLength={15} onChange={(e) => setEvent({...event, name: e.target.value})} />
         </label>
         <hr />
         <label>
            Event Description: <input type="text" placeholder="description" maxLength={300} onChange={(e) => setEvent({...event, description: e.target.value})} />
         </label>
         <br />
         <button  onClick={handleClick}>Create Event</button>
      </div>
   )
}

export default CreateEvents