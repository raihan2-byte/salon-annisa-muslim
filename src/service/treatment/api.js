import axios from "axios";
import { baseUrl } from "../../config/api";

export const getAllTreatment = async (params) => {
  const res = await axios.get(`${baseUrl}/treatment/`, {
    params,
  });
  return res.data;
};
