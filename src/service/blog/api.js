import axios from "axios";
import { baseUrl } from "../../config/api";

export const getAllBlog = async (params) => {
  const res = await axios.get(`${baseUrl}/blog/`, {
    params,
  });
  return res.data;
};
