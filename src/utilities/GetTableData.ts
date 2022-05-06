import { TABLE_CONTENT } from "./settings";
import { AllModel } from "../../types/Utilities";
import { TableDynamic } from "../../types/table";
import { GralObject } from "../../types/Utilities";
const GetTableData = ((): Function => {

    const messages = (prefix: string, msg: string): void => {
        const { log } = console;
        const STYLES = `
            color:#B5DC76;
            background-color:#3A2F45;
            padding:3px 10px;
            border-radius:5px;
            text-transform: uppercase;
        `;
        log(`%c ${prefix}`, STYLES, msg);
    };

    const init = (data: Array<GralObject>, model: string): Array<TableDynamic> => {
        messages("📝 Recorriendo", "estamos buscando datos");
        const TableFields: Array<string> = TABLE_CONTENT[model]

        const TABLE_FIELDS: Array<TableDynamic> = data.map((item: GralObject) => (
            TableFields.reduce((output: GralObject, field: string) => {
                output[field] = item[field];
                return output;
        }, {})));
        return TABLE_FIELDS;
    };

    return init;

})();
export default GetTableData;
