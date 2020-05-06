import axios from "axios";
import { BACKEND_ENDPOINT } from "./variables";

export function get(path) {
  return makeRequest("GET", path);
}

export function post(path, body) {
  return makeRequest("POST", path, body);
}

export function put(path, body) {
  return makeRequest("PUT", path, body);
}

async function makeRequest(method, url, body = {}) {
  const baseURL = BACKEND_ENDPOINT;

  const options = {
    baseURL,
    method,
    url,
    data: body,
  };

  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    if (error.response) {
      const { error: message } = error.response.data;
      throw message;
    } else {
      throw error.message;
    }
  }
}
