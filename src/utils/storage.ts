/**
 * Unified storage service with localStorage and cookie fallback
 */
import * as Cookies from './cookies';
import { ACCESS_TOKEN_STORAGE_KEY } from '../constants/storage';

/**
 * Get the access token from storage
 * @returns The access token or null if not found
 */
export const getAccessToken = (): string | null => {
    return Cookies.getCookie(ACCESS_TOKEN_STORAGE_KEY) as string | null;
};

/**
 * Set the access token in storage
 * @param token The token to store
 * @param rememberMe Whether to store long-term (affects cookie expiration)
 */
export const setAccessToken = (token: string, rememberMe = false): void => {
    const cookieOptions = rememberMe
        ? { expires: 30 } // 30 days
        : {}; // Session cookie

    Cookies.setCookie(ACCESS_TOKEN_STORAGE_KEY, token, cookieOptions);
};

/**
 * Remove the access token from storage
 */
export const removeAccessToken = (): void => {
    Cookies.removeCookie(ACCESS_TOKEN_STORAGE_KEY);
};