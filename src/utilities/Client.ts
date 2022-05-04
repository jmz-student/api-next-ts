import { paramsSendData, Actions, AllOptions } from "../../types/Client";
import { AllModel } from "types/Utilities";

const Client = ((): Function => {
    const __URL_API: string = `${process.env.HOST || "http://localhost:3000"}/api/`;
    let __modelo: string = "";
    let __params: string = "";
    let __body: AllModel = null;
    const __OPTIONS: RequestInit = {};

    const __ACTIONS: Actions = {
        create(): void {
            __OPTIONS.method = "POST";
            __OPTIONS.body = JSON.stringify(__body);
        },
        read(): void {
            __OPTIONS.method = "GET";
        },
        update(): void {
            __OPTIONS.method = "PUT";
            __OPTIONS.body = JSON.stringify(__body);
        },
        delete(): void {
            __OPTIONS.method = "DELETE";
        }
    };


    const __sendData = async (): Promise<AllOptions> => {
        console.log(__URL_API)
        const FETCH = await fetch(`${__URL_API}${__modelo}${__params}`, __OPTIONS);
        const RESPONSE = await FETCH.json();
        return RESPONSE;
    };
    /*****************************************/

    const init = async (settings: paramsSendData): Promise<AllOptions> => {
        __modelo = settings.modelo || "";
        __params = settings.params || "";
        __body = settings.body || {};
        const { action } = settings;
        __ACTIONS[action]();
        return await __sendData();
    };

    return init;
})();

export default Client;
