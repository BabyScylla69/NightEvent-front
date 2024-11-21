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
  const response = await i.get('/users');
    return response.data;
}

// Function to create a user
export const createUser = async (user) => {
  try {
    const response = await i.post('/register', user); // Adjust endpoint as necessary
    return response.data; // Return the response data
  } catch (error) {
    // Handle error appropriately
    console.error('Error creating user:', error.response?.data || error.message);
    throw error;
  }
};

const setAuth = async (token) => {
  i.defaults.headers.common.Authorization = `basic ${token}`;
};

export const getEvents = async () => {
  const response = await i.get('/events')
  return response.data
}

export const getEventByID = async (id) => {
  const response = await i.get('/events/' + id)
  return response.data
}

export const createEvent = async (obj) => {
  await i.post('/events', obj)
}