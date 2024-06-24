import { API } from "./API";

const getListDepartmentAPI = () => {
  return API("GET", "departments/", null);
};

// export
export { getListDepartmentAPI };
