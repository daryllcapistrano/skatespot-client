import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertSkatepark = (payload) => api.post(`/skatepark`, payload);
export const getAllSkateparks = () => api.get(`/skateparks`);
export const updateSkateparkById = (id, payload) =>
  api.put(`/skatepark/${id}`, payload);
export const deleteSkateparkById = (id) => api.delete(`/skatepark/${id}`);
export const getSkateparkById = (id) => api.get(`/skatepark/${id}`);

const apis = {
  insertSkatepark,
  getAllSkateparks,
  updateSkateparkById,
  deleteSkateparkById,
  getSkateparkById,
};

export default apis;
