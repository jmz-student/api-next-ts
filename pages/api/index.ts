import type { NextApiRequest as Request, NextApiResponse as Response } from "next";
import { ServerResponse, GetModels, ValidateMethods } from '@Utils';
import { GralObject } from '../../types/Utilities';

/**
 * Ruta para mostrar todos los modelos disponibles.
 *
 * @category   Routers.
 * @package    api-next-ts.
 * @subpackage pages/api.
 */
export default async (request: Request, response: Response) => {
    const { method = "" } = request;
    const methods: Array<string> = ["GET"];
    const { isValid, message, statusCode } = ValidateMethods({ method, methods });
    const MODELS: GralObject | {} = isValid ? GetModels() : {};
    ServerResponse({
        isValid,
        message,
        statusCode,
        headers: { "allow": methods },
        response,
        result: MODELS,
    });
}
