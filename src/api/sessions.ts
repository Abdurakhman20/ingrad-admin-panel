import { AxiosRequestConfig, AxiosResponse } from "axios";
import { makeRequest } from "./makeRequest";

import { ISession } from "../models/ISession";

const URL = "/api/tests/session";

export const getSessions = (config: AxiosRequestConfig = {}): Promise<AxiosResponse<ISession[]> | undefined> => {
  return makeRequest({ method: "GET", url: `${URL}/all`, ...config });
};

export const deleteSession = (id: number, config: AxiosRequestConfig = {}): Promise<AxiosResponse<number> | undefined> => {
  return makeRequest({ method: "DELETE", url: `${URL}`, params: { id }, ...config });
};
