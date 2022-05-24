import { User } from "./user";

export interface Usuario {
    access_token: string,
    expires_in: number,
    token_type: string,
    user: User
}


