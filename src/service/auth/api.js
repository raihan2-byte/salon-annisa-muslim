import { baseUrl } from "../../config/api";
import axios from "axios";

export const login = async ({ email, password }) => {
  const res = await axios.post(`${baseUrl}/user/login`, {
    email,
    password,
  });
  return res.data;
};

export const registerAuth = async ({ name, email, password }) => {
  const res = await axios.post(`${baseUrl}/user/register`, {
    email,
    password,
  });
  return res.data;
};
