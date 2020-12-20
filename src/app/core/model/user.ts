class userData {
    id: number;
    name: string;
    password: string;
    photourl: string;
    token?: string;
}
class auth {
    expiresIn: string;
    token: string;
}
export class User {
    findUser: userData;
    authToken: auth;
}