import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    identifier?: string;
    password?: string;
  }
}
