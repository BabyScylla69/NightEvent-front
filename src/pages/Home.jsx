import { useState } from "react";
import { login } from "../services/api";
import { useUserContext } from "../providers/UserProvider";

const Home = () => {
   const {setUser} = useUserContext();
   const handleClick = async () => {
      const response = await login(u)
      setUser(response)
   }
  const [u, setU] = useState();

  return (
    <div>
      <input type="text" placeholder="username" onChange={(e) => setU({...u, username: e.target.value})} />
      <input type="password" placeholder="password" onChange={(e) => setU({...u, password: e.target.value})} />

      <button onClick={handleClick}>Enviar</button>
      <br />
      <li><Link to="/register">Register</Link></li>
    </div>
  );
};

export default Home