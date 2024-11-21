import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvents = () =>{
   const [eventName, setEventName] = useState()
   const [eventDesc, setEventDesc] = useState()
   const navigate = useNavigate()

   const event = {
      name: "",
      description: ""
   }

   const handleClick = () =>{
      event.name = eventName
      event.description = eventDesc
      console.log(event, '111111111111111111')
      navigate('/')
   }

   return(
      <div>
         <label>
            Event Name: <input type="text" placeholder="name" maxLength={15} onChange={e => setEventName(e.target.value)} />
         </label>
         <hr />
         <label>
            Event Description: <input type="text" placeholder="description" maxLength={300} onChange={e => setEventDesc(e.target.value)} />
         </label>
         <br />
         <button  onClick={handleClick}>Create Event</button>
      </div>
   )
}

export default CreateEvents