import { MESSAGES } from "./settings";
import { TypeMessage } from "../../types/Utilities";

/**
 * Permite crear mensajes personalizzdos.
 *
 * @category   Utilities.
 * @package    api-next-ts.
 * @subpackage src/utilities
 */
const Messages = ((): Function => {
    let __type:TypeMessage;
    let __color: string;
    let __msg: string;

    /**
     * Permite conseguir el color del mensaje de una lista dada.
     *
     * @return  {void}
     */
    const __getColor = (): void => {
        const COLOR = MESSAGES[__type] || MESSAGES.Info;
        __color =`${COLOR} ${__type.toUpperCase().padEnd(8)}] \x1b[0m => `;
    };

    /**
     * Prepara el mensaeje para se mostrado en consola.
     *
     * @return  {void}
     */
    const __send = (): void => {
        __getColor();
        console.log(__color,  __msg);
    }

    /**
     * Permite inicializar la creación de mensajes.
     *
     * @param {string}      msg  Texto del mensaje.
     * @param {TypeMessage} type (Optional) timpo de mensaje.
     *
     * @return  {void}
     */
    const init = (msg: string, type: TypeMessage = TypeMessage.Info): void => {
        __type = type;
        __msg = msg;
        __send();
    };

    return init;
})();

export default Messages;
