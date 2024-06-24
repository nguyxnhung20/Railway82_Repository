import { API } from "./API";
// get listAccount API
const getListAccountAPI = () => {
  return API("GET", "accounts/", null);
};

// Add New Account
const addAccountNewAPI = (AccountNew) => {
  return API("POST", "accounts/", AccountNew);
};

// Delete Account
const deleteAccountAPI = (id) => {
  const url = "accounts/" + id;
  return API("DELETE", url, null);
};

// Update Account
const updateAccountAPI = (accountUpdate) => {
  const url = "accounts/" + accountUpdate.id;
  return API("PUT", url, accountUpdate);
};
export {
  getListAccountAPI,
  addAccountNewAPI,
  deleteAccountAPI,
  updateAccountAPI,
};
