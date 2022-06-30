import { AxiosInstance, AxiosResponse } from "axios";
import { TableauRestRequest } from "./request";

export function execute(request: TableauRestRequest, axiosInstance?: AxiosInstance): AxiosResponse;
