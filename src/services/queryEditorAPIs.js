import http from "../utility/httpService";
import { BACKEND_BASE_URL } from "../config.json";

const API_EXECUTE_QUERY = BACKEND_BASE_URL + "/executeQuery";

export function callExecuteScriptAPI(queryData, successHandler) {
  console.log(queryData);
  let headers = {
    "Content-Type": "application/json"
  };
  //return http.post(API_EXECUTE_QUERY, queryData, headers);

  // Since I dont have the backend set up. Im hitting a generic placeholder
  return http.get("https://jsonplaceholder.typicode.com/posts");
}
