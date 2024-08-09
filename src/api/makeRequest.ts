import axios, { AxiosRequestConfig } from "axios";
const API_ENDPOINT = "https://bim.ingrad.fvds.ru";
const apiRequirement = process.env.REACT_APP_API_REQUIREMENT;
const testRequirement = process.env.REACT_APP_TEST_REQUIREMENT;

export const makeRequest = async (config: AxiosRequestConfig) => {
  config.url = `${API_ENDPOINT}${config.url}`;
  config.headers = {
    "x-api-requirement": `${apiRequirement}`,
    "x-test-requirement": `${testRequirement}`,
    "Content-Type": "Application/json",
  };

  return await axios(config);
};
