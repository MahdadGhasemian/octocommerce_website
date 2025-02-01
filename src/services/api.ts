import axios, { AxiosInstance } from 'axios';

import { BaseApiUrl } from '@/configs/settings';

const instance: AxiosInstance = axios.create({
  baseURL: BaseApiUrl,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default instance;

export type ApiResponseMeta = {
  itemsPerPage: number;
  itemCount: number;
  currentPage: number;
  totalPages: number;
  sortBy: Array<any>;
};

export type ApiResponseLinks = {
  current: string;
  next: string;
  last: string;
};

export type ApiListResponse<T> = {
  data: Array<T>;
  meta: ApiResponseMeta;
  links: ApiResponseLinks;
};
