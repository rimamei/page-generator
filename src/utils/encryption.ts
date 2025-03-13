import CryptoJS from 'crypto-js';
import { ENCRYPTION_KEY } from '../config';

/**
 * Encrypt a string value
 */
export const encrypt = (value: string): string => {
    return CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
};

/**
 * Decrypt an encrypted string value
 */
export const decrypt = (encryptedValue: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};