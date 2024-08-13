import { httpHandler } from '../Handler.ts';

export async function createUserReq(body) {
    try {
        const Handler = httpHandler();

        const response = await Handler.post('user', body);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
}