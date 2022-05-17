import { TableDynamic } from 'types/table';

const LogicFormat = ((): Function => {

    const __getTitleHead = (ObjTitles: TableDynamic): Array<string> => Object.keys(ObjTitles);

    const init = (allProps: Array<TableDynamic>) => {

        return {
            titlesData: __getTitleHead(allProps[0]),
        }
    };

    return init;

})();

export default LogicFormat;
