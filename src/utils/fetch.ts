// src/utils/api-client.ts
import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken } from './storage';

const API_BASE_URL = '/api';

export const instance = axios.create({
    baseURL: API_BASE_URL
});

// Add request interceptor for auth token
instance.interceptors.request.use(
    (config) => {
        const token = getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for error handling
instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message = error.response?.data?.message || error.message;
        console.error('API Error:', message);
        return Promise.reject(error);
    }
);


/**
 * Generic fetch function that uses the axios instance with proper configuration
 * @param config - Axios request configuration
 * @returns Promise with the response data
 */
export const fetch = async <T = unknown>(config: AxiosRequestConfig): Promise<T> => {
    try {
        return await instance<unknown, T>(config);
    } catch (err: unknown) {
        const defaultError = {
            code: 500,
            status: 'error',
            message: 'Failed to fetch data. Please contact developer.',
        };

        if (typeof err === 'object' && err !== null && 'response' in err) {
            const error = err as { response?: { data?: unknown } };
            if (typeof error.response === 'undefined') return Promise.reject(defaultError);
            else if (typeof error.response.data === 'undefined') return Promise.reject(defaultError);
            else return Promise.reject(error.response.data);
        }
        
        return Promise.reject(defaultError);
    }
};