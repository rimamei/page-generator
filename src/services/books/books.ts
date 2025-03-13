import { fetch } from "../../utils/fetch";
import { TBodyBook, TBooksParams } from "./types";

export const listBooks = (params: TBooksParams) => {
    const config = {
        method: 'GET',
        url: '/books',
        params
    };

    return fetch(config);
}

export const detailBook = (id: string) => {
    const config = {
        method: 'GET',
        url: `/book/${id}`
    };

    return fetch(config);
}

export const createBook = (data: TBodyBook) => {
    const config = {
        method: 'POST',
        url: `/book`,
        data
    };

    return fetch(config);
}

export const editBook = (id: string, data: TBodyBook) => {
    const config = {
        method: 'PUT',
        url: `/book/${id}`,
        data
    };

    return fetch(config);
}

export const deleteBook = (id: string) => {
    const config = {
        method: 'DELETE',
        url: `/book/${id}`
    };

    return fetch(config);
}