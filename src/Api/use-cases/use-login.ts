import { httpHandler } from "../Handler";

type useLoginTypes = {
    Email: string;
    Password: string;
}

export async function kaunaGay({ Password, Email}: useLoginTypes) {
    const handler = httpHandler()
    const gay = await handler.post("user/login", {
        Password,
        Email
    })
    console.log(gay)
}