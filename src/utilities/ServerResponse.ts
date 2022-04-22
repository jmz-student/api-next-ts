import { ItemServerResponse, TypeMessage, CallApi } from '../../types/Utilities';
import { Messages } from '@Utils';
import { Api } from "@Controller";
import { ResponseApi } from 'types/controller';

/**
 * Permite manejar las respuestas del servidor.
 *
 * @category   Utilities.
 * @package    api-next-ts.
* @subpackage src/utilities
 */
const ServerResponse = ((): Function => {

    let __parmas: ItemServerResponse;

    /**
     * Permite setear los headers para la repuesta.
     *
     * @return  {void}
     */
    const __setHeaders = (): void => {
        const { headers = {}, response, statusCode } = __parmas;
        const HEADERS = Object.entries(headers);
        response.status(statusCode);
        response.setHeader("Content-Type", "application/json; charset=utf-8");
        HEADERS.forEach((item) => {
            const VALUE: any = item[1];
            const HEADER: string = item[0];
            response.setHeader(HEADER, VALUE);
        });
    };

    /**
     * Maneja los mensajes de error del servidor.
     *
     * @return  {void}
     */
    const __responseError = async (): Promise<void> => {
        const { message, response } = __parmas;
        __setHeaders();
        Messages(message, TypeMessage.Error);
        response.json({ message });
    };

    /**
     * Manejo de las respuestas correctas del server.
     *
     * @return  {void}
     */
    const __responseSuccess = async (): Promise<void> => {
        const { response, result, method = "" } = __parmas;
        __setHeaders();
        const RESPONSE =  (method) ? await __sendApi() : result;
        response.json(RESPONSE);
    };

    /**
     * Consigue la respuesta de la Base de Datos.
     *
     * @return  {Promise<ResponseApi>}
     */
    const __sendApi = async (): Promise<ResponseApi> => {
        const { method = "GET", result } = __parmas;
        const API = Api.instance;
        const CALL = CallApi[method];
        return await API[CALL](result);
    };

    /**
     * Inicia el manejo de respuestas.
     *
     * @param   {ItemServerResponse}  params Objeto para el manejo de respuestas.
     *
     * @return  {void}
     */
    const init = async (params: ItemServerResponse): Promise<void> => {
        __parmas = params;
        const { isValid, statusCode } = params;
        if (statusCode < 400 || isValid) await __responseSuccess();
        else await __responseError();
    };

    return init;
})();

export default ServerResponse;
