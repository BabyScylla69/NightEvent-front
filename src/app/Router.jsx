import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from '../pages/Register';
import Events from '../pages/Events'
import Event from '../pages/Event'
import CreateEvent from '../pages/CreateEvent'
import Profile from '../pages/Profile'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Events/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/event:id" element={<Event/>} />
      <Route path="/create-event" element={<CreateEvent/>} />
      <Route path="/profile:id" element={<Profile/>}></Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;