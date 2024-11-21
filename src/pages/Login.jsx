import { useState } from "react";
import { login } from "../services/api";
import { useUserContext } from "../providers/UserProvider";
import Form from "../components/Form/Form";

const Login = () => {
   const {setUser} = useUserContext();
   
  const [u, setU] = useState();
  const [modal, setModal] = useState();

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
      <Form openModal={modal} closeModal={() => setModal(false)}> 
        <h1>Register Form</h1>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>Register</button>
      </Form>
    </div>
  );
};

export default Login