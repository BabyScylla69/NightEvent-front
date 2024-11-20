import axios from 'axios';
const i = axios.create({
  baseURL: 'http://localhost:8080'
})

export const login = async ({username, password}) =>{

  const token = btoa(username + ':' + password);
  const response =  await i.post('/login', {},
  {
    headers: {  
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + token
    }
  }
  );
  setAuth(token);
  return response.data;
}

export const getUsers = async () =>{
  const response = await i.get('/users/');
    return response.data;
}

const setAuth = async (token) => {
  i.defaults.headers.common.Authorization = `basic ${token}`;
};