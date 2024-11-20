import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Events from '../pages/Events.jsx/index.js'
import Event from '../pages/Event.jsx/index.js'
import CreateEvent from '../pages/CreateEvents'
import InviteUsers from '../pages/InviteUsers.jsx'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/event" element={<Event/>} />
      <Route path="/create-event" element={<CreateEvent/>} />
      <Route path="/invite-users" element={<InviteUsers/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;