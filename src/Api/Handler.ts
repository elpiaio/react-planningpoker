import axios from "axios";

export function httpHandler() {
    const Handler = axios.create({
        baseURL: 'https://planning-poker-api.tunad.io/',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
    });

    return Handler;
}