import { fetch } from "../../utils/fetch";

export const books = () => {
    const config = {
        method: 'GET',
        url: '/books',
    };

    return fetch(config);
}