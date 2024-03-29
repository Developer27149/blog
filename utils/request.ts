import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({ baseURL: process.env.WEBSITE });

instance.interceptors.response.use((resp) => {
  return resp?.data;
});

export const request = {
  get: <T>(url: string, config: AxiosRequestConfig = {}): Promise<T> =>
    instance.get(url, config),
  post: <T>(
    url: string,
    data = {},
    config: AxiosRequestConfig = {}
  ): Promise<T> => instance.post(url, data, config),
};
