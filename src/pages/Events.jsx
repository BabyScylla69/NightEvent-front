import { Link } from "react-router-dom";

const Events = () =>{
// list events
return(
    <div>
      {/* <li><Link to="/profile">Profile</Link></li> */}
      <li><Link to="/Create-Event">Create new event</Link></li>
    </div>
)
}

export default Events