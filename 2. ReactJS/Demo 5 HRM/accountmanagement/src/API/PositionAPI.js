import { API } from "./API";

const getListPositionAPI = () => {
  return API("GET", "possitions/", null);
};

// export
export { getListPositionAPI };
