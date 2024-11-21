import {useState, useEffect} from 'react';
import {getEventByID } from '../services/api';
import { useParams } from 'react-router-dom'

const Event = () =>{
   var { id } = useParams()
   const [event, setEvent] = useState([])

   const eventInfo = (
      <div>
         {event.name}
         <hr />
         {event.description}
      </div>
   ) 

   useEffect(()=>{
      console.log(id)
      getEventByID(id).then((eventInfo) => setEvent(eventInfo))
   }, [])

   return(
      <div>
         {eventInfo}
      </div>
   )
}

export default Event