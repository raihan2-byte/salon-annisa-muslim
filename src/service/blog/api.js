import axios from "axios";
import { baseUrl, token } from "../../config/api";

export const getAllBlog = async (params) => {
  const res = await axios.get(`${baseUrl}/blog/`, {
    params,
  });
  return res.data;
};

export const createBlog = async (data) => {
  const res = await axios.post(`${baseUrl}/blog/`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token()}`,
    },
  });
  return res.data;
};

export const updateBlog = async (slug, data) => {
  const res = await axios.put(`${baseUrl}/blog/${slug}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token()}`,
    },
  });
  return res.data;
};
