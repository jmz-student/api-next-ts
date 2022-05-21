import Client from '../../src/utilities/Client';
import { paramsSendData, TypeActions } from "../../types/Client";
import { GralObject, AllModel } from '../../types/Utilities';
import { TableDynamic } from 'types/table';
import { PropsModal } from '../../types/table';
import GetTableData from '../../src/utilities/GetTableData';

type itemsDeleteData = {
    id: string;
    tableData: Array<TableDynamic>;
    index: number;
};

type itemsUpdate = {
    body: AllModel;
    index: number,
};


const LogicData = ((): {[key: string]: Function} => {

    const __refreshData = async (selectedModel: string): Promise<any> => {
        const Data: GralObject = await Client({
            modelo: selectedModel,
            action: TypeActions.READ,
        });
        return GetTableData(Data.data, selectedModel);
    };

    const deleteData = async (selectedModel: string, config: itemsDeleteData): Promise<Array<TableDynamic>> => {
        const settings: paramsSendData = {
                modelo: selectedModel,
                params: `/id/${config.id}`,
                action: TypeActions.DELETE,
        }
        await Client(settings);
        return __refreshData(selectedModel);
    }

    const updateData = async (selectedModel: string, config: itemsUpdate): Promise<any> => {
        const FIND_DATA = findData(selectedModel, config);
        const settings: paramsSendData = {
            modelo: selectedModel,
            params: `/id/${config.body._id}`,
            action: TypeActions.UPDATE,
            body: {
                ...FIND_DATA,
                ...config.body,
                name: `${config.body.name}_${Math.random().toString(36).substr(2)}`,
            },
        };
        return __refreshData(selectedModel);

    };

    const findData = async (selectedModel:string, config: itemsUpdate): Promise<any> => {
        const Data: GralObject = await Client({
            modelo: selectedModel,
            action: TypeActions.READ,
            params: `/id/${config.body._id}`
        });
        return Data.data[0];
    }

    const getPropsModals = async (type: string, selectedModel: string, config: any): Promise<PropsModal>  => {
        const TEXT_ACTIONS = type === "delete" ? "Eliminar" : "Actualizar";
        return {
            title: `${TEXT_ACTIONS} registro`,
            info: `¿Estas seguro que deseas ${TEXT_ACTIONS.toLowerCase()} el registro del modelo ${selectedModel}?`,
            textButton: `${TEXT_ACTIONS}`,
            show: true,
            action: "",
            type,
            params: type === "update" ? await findData(selectedModel, config)  : { id: "", index: 0 }
        };
    };

    return { deleteData, getPropsModals, updateData, findData };
})();

export default LogicData;
