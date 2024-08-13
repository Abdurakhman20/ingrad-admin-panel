import { AxiosRequestConfig, AxiosResponse } from "axios";
import { makeRequest } from "./makeRequest";

import { ILicenseKey } from "../models/ILicenseKey";

const URL = "/api/tests/license-key";

export const getLicenseKeys = (config: AxiosRequestConfig = {}): Promise<AxiosResponse<ILicenseKey[]> | undefined> => {
  return makeRequest({ method: "GET", url: `${URL}/all`, ...config });
};

export const deleteLicenseKey = (id: number, config: AxiosRequestConfig = {}): Promise<AxiosResponse<undefined>> => {
  return makeRequest({ method: "DELETE", url: `${URL}`, params: { id: id }, ...config });
};

export const createLicenseKey = (
  name: string,
  value: string,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<ILicenseKey> | undefined> => {
  const body = {
    name,
    value,
  };
  return makeRequest({ method: "POST", url: `${URL}`, data: body, ...config });
};
