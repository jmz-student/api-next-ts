import { Lead } from './Models';

export enum ValidMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    DEFAULT = "DEFAULT",
}

export interface FetchOptions {
    method: ValidMethods;
    body?: Lead;
}
export interface DeleteResponse {
    success : boolean;
    data: {
        acknowledged: boolean;
        deletedCount: number;
    }
}

export type FetchResponse = DeleteResponse | Lead;
