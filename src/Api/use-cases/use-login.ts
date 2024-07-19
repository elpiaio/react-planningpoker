import { httpHandler } from "../Handler.ts";
import { sweetalert2 } from "../../use-cases/use-sweetalert.ts"

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
        sweetalert2.alertSweetalert("Error", error.response.data.message, "error")
        return null
    }
}