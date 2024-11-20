import { useState } from "react";
import { login } from "../services/api";
import { useUserContext } from "../providers/UserProvider";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Login = () => {
   const {setUser} = useUserContext();

   const [u, setU] = useState({username: '', password: ''});
   const [modal, setModal] = useState(false);


   const handleClick = async () => {
      const response = await login(u)
      setUser(response)
   }

  return (
    <div>
      <input type="text" placeholder="username" onChange={(e) => setU({...u, username: e.target.value})} />
      <input type="password" placeholder="password" onChange={(e) => setU({...u, password: e.target.value})} />
      <button onClick={handleClick}>Log in</button> 
      <br />
      <button onClick={() => setModal(true)}>Register</button>
      <RegisterForm openModal={modal} closeModal={() => setModal(false)} />
    </div>
  );
};

export default Login