import type { NextApiRequest as Request, NextApiResponse as Response } from "next";
import { FormatData, ValidateMethods, ServerResponse } from "@Utils";
import { ResponseFormatData } from "../../../../types/Utilities";

/**
 * Ruta para listar, actualizar y borrar registros mediante campos indicados.
 *
 * @category   Routers.
 * @package    api-next-ts.
 * @subpackage pages/api.
 */
export default async (request: Request, response: Response) => {
    const { method = "", query = {}, body = null } = request;
    const methods: Array<string> = ["PUT", "DELETE", "GET"];
    const { isValid, message, statusCode } = ValidateMethods({ method, methods });
    const result: ResponseFormatData = FormatData({ query, body });
    ServerResponse({
        isValid,
        message,
        statusCode,
        headers: { "allow": methods },
        response,
        result,
        method,
    });
};
