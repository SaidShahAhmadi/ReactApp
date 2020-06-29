import axios from "axios";
import logger from "../services/logService.js";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.state >= 400 && error.response.state < 500;

  //unexpected error
  if (!expectedError) {
    logger.log(error);
    //showing an error and update the state with prvese state
    toast.error("An unexpected error accurrred.");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
