import { useState } from "react";
import { Link } from "react-router-dom";

const CreateEvents = () =>{
   const [eventName, setEventName] = useState()
   const [eventDesc, setEventDesc] = useState()

   const event = {
      name: "",
      description: ""
   }

   const handleClick = () =>{
      event.name = eventName
      event.description = eventDesc
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
      </div>
   )
}

export default CreateEvents