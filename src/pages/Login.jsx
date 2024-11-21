import { useState } from "react";
import { createUser, login } from "../services/api";
import { useUserContext } from "../providers/UserProvider";
import Form from "../components/Form/Form";

const Login = () => {
  const {setUser} = useUserContext();

  const [u, setU] = useState({username: '', password: ''});
  const [modal, setModal] = useState(false);


  const handleClick = async () => {
    const response = await login(u)
    setUser(response)
  }

  const handleRegisterClick = async () => {
    await createUser(u)
    window.location.reload(false);
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
        <input type="text" placeholder="username" onChange={(e) => setU({...u, username: e.target.value})}/>
        <input type="password" placeholder="password" onChange={(e) => setU({...u, password: e.target.value})}/>
        <button onClick={handleRegisterClick}>Register</button>
      </Form>
    </div>
  );
};

export default Login