import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token ={
  setAuthHeader(token){ 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearAuthHeader() { 
  axios.defaults.headers.common.Authorization = '';
},
};
 
export async function registration(newUser) {
  const response = await axios.post("/users/signup", newUser );

  return response.data; 
};
export async function logining(user) {
  const response = await axios.post("/users/login", user);
  return response.data
};
export async function refreshing() {
  const response = await axios.get(`/users/current`);
    return response.data;
};
export async function logout() {
   await axios.post("/users/logout");
};

export async function getContacts() {
  const response = await axios.get("/contacts");
  return response.data; 
};
export async function postContact(newContact) {
  const response = await axios.post("/contacts", newContact );
    return response.data
};
export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
    return response.data;
};