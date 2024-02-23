import axios, { AxiosResponse } from "axios";

const postData = async <T, D>(path: string, data: D) => {
  const response = await axios.post<T, AxiosResponse<T>, D>(`${path}`, data);
  return response.data;
};

export default postData;
