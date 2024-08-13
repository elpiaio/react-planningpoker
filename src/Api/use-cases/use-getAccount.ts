import { httpHandler } from '../Handler.ts';

export async function reqGetUserEmail(email) {
    try {
        const Handler = httpHandler();

        const response = await Handler.get(`user/email/${email}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        return null;
    }
}