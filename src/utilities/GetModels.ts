import { join } from "path";
import { existsSync, readdirSync } from "fs";

import { Messages } from "@Utils";
import { SpecialObject, TypeMessage } from '../../types/Utilities';

/**
 * Permite conseguir dinamicamente los modelos para mongodb.
 *
 * @category   Utilities
 * @package    api-next-ts
* @subpackage src/utilities
 */
const GetModels = ((): Function => {

    const __MODEL_PATH: string = join(__dirname, "../../../src/models/");
    const __MODEL_EXIST: boolean = existsSync(__MODEL_PATH);
    const __MODEL_LIST: SpecialObject = { success: false };

    /**
     * Consigue el listado de los modulos existentes.
     *
     * @return  {void}
     */
    const __getListFile = (): void => {
        const FILES: Array<string> = readdirSync(__MODEL_PATH);
        if (FILES.length > 1) {
            __MODEL_LIST.success = true;
            Messages("Modelos listados", TypeMessage.Success);
            for (let file of FILES) {
                if (!/index/.test(file)) {
                    const KEY = file.replace(/\.\w{2,}$/, "").toLowerCase();
                    __MODEL_LIST[KEY] = `${process.env.HOST}/api/${KEY}`
                }
            }
        } else {
            Messages("No existen modelos para listar", TypeMessage.Error);
            __MODEL_LIST.msg = "No existen modelos ...";
        }
    };

    /**
     * Disparador para la busqueda de modelos.
     *
     * @return  {void}.
     */
    const __tiggerFind = (): void => {
        if (__MODEL_EXIST)
            __getListFile();
        else {
            Messages(`No existe la ruta ${__MODEL_PATH}`, TypeMessage.Error);
            __MODEL_LIST.msg = `No existe la ruta ${__MODEL_PATH}`;
        }
    }

    /**
     * Permite inicializar la busqueda de los modelos.
     *
     * @return {SpecialObject}
     */
    const init = (): SpecialObject => {
        Messages("Buscando modelos", TypeMessage.Info);
        __tiggerFind();
        return __MODEL_LIST;
    };

    return init;
})();

export default GetModels;
