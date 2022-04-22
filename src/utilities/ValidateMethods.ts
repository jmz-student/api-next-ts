import { ItemValidate, SpecialObject, StatusCode } from '../../types/Utilities';

/**
 * Permite validar los metodos permitidos para el api rest
 *
 * @category   Utilities.
 * @package    api-next-ts.
* @subpackage src/utilities
 */
const ValidateMethods = ((): Function => {
    let __method: any;
    let __methods: Array<string | StatusCode>;


    /**
     * Valida que el metodo con le que se realiza la peticion ea valido.
     *
     * @return  {SpecialObject}
     */
    const __validate = (): SpecialObject => {
        const RESULT: SpecialObject = {
            message: `El metodo ${__method} no es permitido`,
            isValid: false,
            statusCode: StatusCode.ERROR_METHOD,
        };
        if (__methods.includes(__method)) {
            RESULT.isValid = true;
            RESULT.statusCode = StatusCode[__method];
            RESULT.message = "OK";
        }
        return RESULT
    };

    /**
     * Inicializa la validacion del metodo enviado
     *
     * @param   {ItemValidate}   params  Listado de metodos validos,
     *
     */
    const init = (params: ItemValidate): SpecialObject => {
        __method = params.method;
        __methods = params.methods;
        return __validate();
    };

    return init;
})();

export default ValidateMethods;
