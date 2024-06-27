import axios from "axios";

// Khai báo cấu hình chung cho API
const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
});

let api = (method, endpoint, payload) => {
  //
  return axiosClient(endpoint, { method: method, data: payload }).then(
    (res) => {
      return res.data;
    }
  );
};

export { api };
