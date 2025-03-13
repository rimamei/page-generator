import { decrypt, encrypt } from "./encryption";

/**
 * Get an item from localStorage with type safety and decryption
 * @param key The key to retrieve
 * @param encrypted Whether to decrypt the value, default is false
 * @returns The stored value or null if not found
 */
export const getLocalStorageItem = <T>(key: string, encrypted: boolean = false): T | null => {
    try {
        const item = localStorage.getItem(key);
        if (!item) return null;
        
        const parsedValue = encrypted ? JSON.parse(decrypt(item)) : JSON.parse(item);
        return parsedValue;
    } catch (error) {
        console.error(`Error getting item ${key} from localStorage:`, error);
        return null;
    }
};

/**
 * Set an item in localStorage with type safety and encryption
 * @param key The key to set
 * @param value The value to store
 * @param encrypted Whether to encrypt the value, default is false
 */
export const setLocalStorageItem = <T>(key: string, value: T, encrypted: boolean = false): void => {
    try {
        const stringValue = JSON.stringify(value);
        const valueToStore = encrypted ? encrypt(stringValue) : stringValue;
        localStorage.setItem(key, valueToStore);
    } catch (error) {
        console.error(`Error setting item ${key} in localStorage:`, error);
    }
};

/**
 * Remove an item from localStorage
 * @param key The key to remove
 */
export const removeLocalStorageItem = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing item ${key} from localStorage:`, error);
    }
};

/**
 * Clear all items from localStorage
 */
export const clearLocalStorage = (): void => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
};
