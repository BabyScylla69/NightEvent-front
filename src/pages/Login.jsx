import { useState } from "react";
import { login } from "../services/api";
import { useUserContext } from "../providers/UserProvider";

const Login = () => {
   const {setUser} = useUserContext();

   const [u, setU] = useState();
   const [popUp, setPopUp] = useState(false);

   const handleClick = async () => {
      const response = await login(u)
      setUser(response)
   }

   const openPopUp = () => {
      setPopUp(true)
   }

   const closePopup = () => {
    setPopUp(false);
  };

  return (
    <div>
      <input type="text" placeholder="username" onChange={(e) => setU({...u, username: e.target.value})} />
      <input type="password" placeholder="password" onChange={(e) => setU({...u, password: e.target.value})} />

      <button onClick={handleClick}>Enviar</button> 
      <br />
      <button onClick={openPopUp}>Register</button>

      {popUp && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2>Register</h2>
            <input type="text" placeholder="username" onChange={(e) => setU({...u, username: e.target.value})} />
            <input type="password" placeholder="password" onChange={(e) => setU({...u, password: e.target.value})} />
            <button onClick={handleClick}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login