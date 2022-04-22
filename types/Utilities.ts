import { NextApiResponse } from "next";
import { Agenda, Pokemon, Lead } from "./Models";

/**
 * Configuracion general de objetos de respuesta
 */
export type GralObject = {
    [key: string]: string;
};

/**
 * Configuracion especial para multiples tipos en un objeto
 */
export type SpecialObject = {
    [key: string]: string | boolean | number | { [key: string]: Array<RegExp> };
};

/**
 * Tipo que carga todos los modelos
 */
export type AllModel = Lead | Agenda | Pokemon | null;

/**
 * Tipos para la funcion messages
 */
export enum TypeMessage {
    "Error" = "error",
    "Info" = "info",
    "Success" = "success",
    "Warning" = "warning",
};

/**
 * Tipos para el validador de metodos
 */
export enum StatusCode {
    "DELETE" = 202,
    "GET" = 200,
    "POST" = 201,
    "PUT" = 202,
    "ERROR_METHOD" = 405,
};

export interface ItemValidate {
    methods: Array<string>;
    method: string;
};

/**
 * Tipos para format data
 */
export interface ItemFormatData {
    body: AllModel;
    query: GralObject;
};

export interface ResponseFormatData {
    data: AllModel,
    model: string,
    params: GralObject,
    query?: SpecialObject,
};

/**
 * Tipos para las respuesta del server
 */

export enum CallApi {
    "DELETE" = "delete",
    "GET" = "read",
    "POST" = "create",
    "PUT" = "update",
};

export type ItemServerResponse = {
    headers?: { [key: string]: any } | {},
    response: NextApiResponse,
    isValid: boolean,
    statusCode: StatusCode,
    message: string,
    result: ResponseFormatData,
    method?: "GET" | "DELETE" | "POST" | "PUT",
}


export interface ResponseSend {
    [key: string]: string | boolean;
}
