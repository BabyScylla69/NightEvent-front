import { Link } from "react-router-dom";
import { getEvents } from '../services/api';
import { useEffect, useState } from "react";

const Events = () =>{
  const [events, setEvents] = useState([])

  const listEvents = events?.map((event) => 
    <div key={event.id}>
      <Link to={"/event/" + event.id}>{event.name}</Link>
    </div>
  ) 

  useEffect(()=>{
    getEvents().then((events) => setEvents(events))
  }, [])

  return(
    <div> 
      {listEvents}
      {/* <li><Link to="/profile">Profile</Link></li> */}
      <li><Link to="/Create-Event">Create new event</Link></li>
    </div>
  )
}

export default Events