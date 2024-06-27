import { api } from "./api";

let getListAccountAPI = () => {
  //   Axios.get(`http://localhost:8080/api/v1/accounts`).then((response) => {
  //     // ...
  //     // console.log("response: ", response.data);
  //   });
  return api("GET", "accounts", null);
};

let createNewAccountAPI = (accountNew) => {
  return api("POST", "accounts", accountNew);
};

// Delete Account
const deleteAccountAPI = (id) => {
  let url = "accounts/" + id;
  return api("DELETE", url, null);
};

// Update Account
const updateAccountAPI = (accountUpdate) => {
  let url = "accounts/" + accountUpdate.id;
  return api("PUT", url, accountUpdate);
};

export {
  getListAccountAPI,
  createNewAccountAPI,
  deleteAccountAPI,
  updateAccountAPI,
};
