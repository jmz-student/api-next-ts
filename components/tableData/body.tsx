import { FC, ReactElement, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { render as RenderComponent } from "react-dom";
import { TableDynamic } from 'types/table';
import Button from "../button";
import LogicData from "./LogicData"
import { GralObject } from '../../types/Utilities';
import TableData from './index';

type PropsTableBody = {
    bodyData: Array<TableDynamic>,
    selectedModel: string,
};
// title: string,
//     info: string,
//     textButton: string,
//     show: boolean,
//     type: string,
//     action: string,
//     params: {
//         id?: string,
//         index?: number
//     },
const Body: FC<PropsTableBody> = ({ bodyData, selectedModel }) => {
    const [dataState, setData] = useState(bodyData);

    const getActions = (action: string, config: GralObject) => {
        const Modal = dynamic(() => import("../../components/modal"));
        const PROPS = LogicData.getPropsModals(action, selectedModel);
        RenderComponent(
            <Modal
                {...PROPS}
                callBack={() => {
                    const ACTION: Function = LogicData[`${action}Data`] || function () { };
                    config.tableData = dataState;
                    ACTION(selectedModel, config).then((response: any) => {
                        setData(response);
                    });
                }} />,
            document.querySelector("#containerModal")
        );
    };

    useEffect(() => {
        setData(bodyData);
    }, [bodyData]);

    return (
        <tbody>
            {
                dataState.map((data, indexUp): ReactElement => {
                    const ITEMS = Object.values(data);
                    return (
                        <tr key={`${data._id}-tr`} className="bg-white border-b text-center">
                            {
                                ITEMS.map((value, index): ReactElement => (
                                    <td key={`${data._id}-td_${index}`} className='text-sm px-6 py-4'>
                                        {value}
                                    </td>
                                ))
                            }
                            <td>
                                <div className="flex justify-evenly">
                                    <Button type="trash" onClicEvent={() => getActions("delete", { id: data._id, index: indexUp })} />
                                    <Button type="pencil" onClicEvent={() => getActions("update", { body: data, index: indexUp })} />
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
}
export default Body;
