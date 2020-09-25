import axios from "axios";

const apiUrl = `http://localhost:4000/`;

const register = (name, email, password) => {
  return axios.post(apiUrl + "users/register", {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(apiUrl + "users/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default { register, login, logout, getCurrentUser };
