import { ItemFormatData, ResponseFormatData, GralObject, SpecialObject } from '../../types/Utilities';

/**
 * Permite conseguir los parametros enviados.
 *
 * @category   Utilities
 * @package    api-next-ts
 * @subpackage src/utilities
 */
const FormatData = ((): Function => {
    /**
     * Permite formatear el valode del modelo.
     *
     * @param   {GralObject}  query  Parametros enviados por el server.
     *
     * @return  {string}
     */
    const __getModel = (query: GralObject): string => {
        const { model } = query;
        const FIRT:string = model.charAt(0).toUpperCase();
        const REST: string = model.slice(1);
        return `${FIRT}${REST}`;
    };

    /**
     * Permite conseguir los parametros extras para construir un query de busqueda.
     *
     * @param   {GralObject}     query  Listado de  parametors enviados por la url.
     *
     * @return  {SpecialObject}
     */
    const __buildQuery = (query: GralObject): SpecialObject => {
        let { field = "" } = query;
        const { value = "" } = query;
        const REG_EXP: RegExp = new RegExp(value, "i");
        field = field === "id" ? "_id" : field;
        const VALUE = (field === "_id") ?  value : { $in: [ REG_EXP ] };
        const QUERY: SpecialObject = {};
        QUERY[field] = VALUE;
        return QUERY;
    };

    /**
     * Permite inicializar el formateo de la data.
     *
     * @return {ResponseFormatData}
     */
    const init = (setting: ItemFormatData): ResponseFormatData => {
        const { query = {}, body = null } = setting;
        const model = __getModel(query);
        delete query.model;
        return {
            data: body,
            model,
            params: { ...query },
            query: __buildQuery(query),
        };
    };
    return init;
})();

export default FormatData;
