import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

instance.interceptors.request.use(
  (req) => {
    req.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return req;
  },
  (error) => Promise.reject(error)
);

export default instance;
