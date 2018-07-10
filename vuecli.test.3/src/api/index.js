import API_HOST_PROD from "./prod";
import API_HOST_DEV from "./dev";

const API_HOST =
  process.env.NODE_ENV === "production" ? API_HOST_PROD : API_HOST_DEV;
export default API_HOST;
