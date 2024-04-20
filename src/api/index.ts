/* eslint-disable prettier/prettier */
import axios from 'axios';
export let baseUrl: string;
export const env: string = 'dev';

if (env === 'dev') {
  baseUrl = 'http://192.168.0.135:8080'; // change the ip here
} else if (env === 'staging') {
  baseUrl = '';
} else if (env === 'production') {
  baseUrl = '';
}
type Headers = {
  Authorization?: string;
  'Content-Type'?: string;
};

export const post = async (
  url: string,
  body: object,
) => {
  try {
    const headers: Headers = {
      'Content-Type': 'application/json',
    };
    const { data, status } = await axios.post(`${baseUrl}${url}`, body, {
      headers,
    });
    return { data, status };
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const get = async (url: string) => {
  try {
    const response = await axios.get(`${baseUrl}${url}`, { headers: { 'Content-Type': 'application/json' } });
    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

export const patch = async (
  url: string,
  body: object,
  token: string | undefined
) => {
  try {
    const headers: Headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const { data, status } = await axios.patch(`${baseUrl}${url}`, body, {
      headers,
    });
    return { data, status };
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const remove = async (url: string, token: string | undefined) => {
  try {
    const headers: Headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const { data, status } = await axios.delete(`${baseUrl}${url}`, {
      headers,
    });
    return { data, status };
  } catch (error: any) {
    return error?.response?.data;
  }
};
