import { FastifyRequest } from "fastify";


export interface IUserRequest extends FastifyRequest {
    body: any;
    authUser: any;
}

export interface IHeaders {
    'x-acess-token': string;
}

export interface IReply {
    code: number;
    message: string;
    body: any;
}