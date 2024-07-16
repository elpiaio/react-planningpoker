import { httpHandler } from "../Handler.ts";

type useLoginTypes = {
    Email: string;
    Password: string;
}

export async function makeLogin({ Password, Email }: useLoginTypes) {
    const handler = httpHandler()

    try {
        const response = await handler.post("user/login", {
            Password,
            Email
        })

        return response.data
    } catch (error) {
        console.log(error.response.data.message)
    }
}