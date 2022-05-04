import { AllModel } from './Utilities';
export enum TypeActions {
    "CREATE" = "create",
    "READ" = "read",
    "UPDATE" = "update",
    "DELETE" = "delete",
}

export interface paramsSendData {
    modelo?: string;
    params?: string;
    action: TypeActions;
    body?: AllModel;
};

export interface Actions {
    create: Function;
    read: Function;
    update: Function;
    delete: Function;
};

export type CreateResponse = AllModel;

export interface ReadResponse{
    success: boolean;
    data: Array<AllModel>;
}

export interface UpdateResponse{
    success: boolean;
    data:{
        acknowledged: boolean;
        modifiedCoun: number;
        upsertedId: number | null;
        upsertedCount: number;
        matchedCount: number;
    }
}

export interface DeleteResponse{
    success: boolean;
    data:{
        acknowledged: boolean;
        deletedCount: number;
    }
}
export type AllOptions = CreateResponse | ReadResponse | UpdateResponse | DeleteResponse;
