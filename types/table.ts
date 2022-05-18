import { GralObject } from './Utilities';
interface TableDefault {
    _id?: string,
};

export interface TableDynamic extends TableDefault {
    [key: string]: string | boolean | number | undefined;
};

interface PropsCallBackModal {
    callBack: Function,
}


export interface PropsModal {
    title: string,
    info: string,
    textButton: string,
    show: boolean,
    type: string,
    action: string,
    params: {
        id?: string,
        index?: number
    },
};

export type PropsAllModal = PropsModal & PropsCallBackModal;

