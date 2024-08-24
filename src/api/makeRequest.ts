import axios, { AxiosRequestConfig } from "axios";
const API_ENDPOINT = "https://bim.ingrad.fvds.ru";
const apiRequirement = import.meta.env.VITE_REACT_APP_API_REQUIREMENT;
const testRequirement = import.meta.env.VITE_REACT_APP_TEST_REQUIREMENT;

export const makeRequest = async (config: AxiosRequestConfig) => {
  config.url = `${API_ENDPOINT}${config.url}`;
  config.headers = {
    "api-requirement": `${apiRequirement}`,
    "test-requirement": `${testRequirement}`,
  };
  return await axios(config);
};
