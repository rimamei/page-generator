/**
 * Utility functions for working with secure cookies
 */

import { decrypt, encrypt } from "./encryption";

interface CookieOptions {
    expires?: Date | number; // Date object or days as number
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
}

/**
 * Get a cookie value by name and decrypt it
 * @param name The name of the cookie to retrieve
 * @returns The decrypted cookie value or null if not found
 */
export const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp(`(^|;\\s*)(${name})=([^;]*)`));
    if (!match) return null;
    
    try {
        return decrypt(decodeURIComponent(match[3]));
    } catch (e) {
        console.error('Failed to decrypt cookie:', e);
        return null;
    }
};

/**
 * Set an encrypted cookie with the given name, value, and security options
 * @param name The name of the cookie
 * @param value The value to encrypt and store
 * @param options Cookie options (expires, path, domain, secure, httpOnly, sameSite)
 */
export const setCookie = (name: string, value: string, options: CookieOptions = {}): void => {
    // Encrypt the value before storing
    const encryptedValue = encrypt(value);
    
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(encryptedValue)}`;

    if (options.expires) {
        const expirationDate =
            typeof options.expires === 'number'
                ? new Date(Date.now() + options.expires * 24 * 60 * 60 * 1000)
                : options.expires;
        cookieString += `; expires=${expirationDate.toUTCString()}`;
    }

    if (options.path) cookieString += `; path=${options.path}`;
    if (options.domain) cookieString += `; domain=${options.domain}`;
    
    // Set security options with secure defaults
    cookieString += options.secure !== false ? '; secure' : '';
    cookieString += options.httpOnly !== false ? '; httpOnly' : '';
    cookieString += `; samesite=${options.sameSite || 'strict'}`;

    document.cookie = cookieString;
};

/**
 * Remove a cookie by name
 * @param name The name of the cookie to remove
 * @param options Cookie options (path and domain needed for removal)
 */
export const removeCookie = (name: string, options: Pick<CookieOptions, 'path' | 'domain'> = {}): void => {
    setCookie(name, '', {
        ...options,
        expires: new Date(0),
        secure: true,
        httpOnly: true
    });
};