import axios from 'axios';
import { constants } from '@/libs/constants';

export const http = axios.create({
  baseURL: constants.API,
  timeout: 20_000,
});
