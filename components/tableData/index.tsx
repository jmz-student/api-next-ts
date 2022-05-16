import React, { ReactElement, useState } from 'react';
import { paramsSendData, Actions, AllOptions, TypeActions } from "../../types/Client";
import { TableDynamic } from 'types/table';
import { GralObject, AllModel } from '../../types/Utilities';
import Client from '../../src/utilities/Client';
import { Modal } from "components/modal";
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'
export const TableData = ({ tableDat = [], selectedModel = "" }: { tableDat: Array<TableDynamic>, selectedModel: string }): ReactElement => {
    const [tableData, setTableData] = useState(tableDat);
    const [modal, setShowModal] = React.useState({ edit: false, delete: false});
    const [bodyModal, setBodyModal] = React.useState({ title: "", info:"", textButton: "", type: ""});


    const AUX = tableData[0] || {};
    const KEY: Array<string> = Object.keys(AUX);


    const BorrarDato = async (id: string | undefined, index: number): Promise<void> => {
        setShowModal((prevState) => ({
            ...prevState,
            delete: true,
        }));
        setBodyModal({
            title: "Eliminar registro",
            info: `¿Estas seguro que deseas borrar el registro del modelo ${selectedModel}?`,
            textButton: "Eliminar",
            type: "delete",
        });

        const settings: paramsSendData = {
            modelo: selectedModel,
            params: `/id/${id}`,
            action: TypeActions.DELETE,
        }
        const RESPONSE: GralObject = await Client(settings);
        delete tableData[index]
        const DATA_FILTER = tableData.filter(Boolean);
        setTableData(DATA_FILTER);
        setShowModal((prevState) => ({
            ...prevState,
            delete: false,
        }));
    };

    const ActualizarDato = async (data: AllModel, index: number): Promise<void> => {
        const settings: paramsSendData = {
            modelo: selectedModel,
            params: `/id/${data._id}`,
            action: TypeActions.UPDATE,
            body: {
                ...data,
                name: Math.random().toString(36).substr(2),
            }
        }
        const RESPONSE: GralObject = await Client(settings);
        console.log(settings);
    }
    return (
        <>
            <section id="table" className="w-full relative py-8 md:py-16 lg:py-24 xl:py-30 border-t border-gray-200 px-8 xl:px-0">
                <div className="container max-w-6xl mx-auto h-full flex flex-col justify-between items-center">
                    <h3 className="font-black  mt-2 sm:mt-0 px-5 sm:px-0 sm:text-3xl max-w-2xl leading-tight text-gray-900 text-center">Información del modelo <span className="text-indigo-600">{selectedModel}</span></h3>
                    <div className="mt-10">
                        <table className="table-auto">
                            <thead className="border-b bg-gray-800">
                                <tr>
                                    {
                                        KEY.map((title): ReactElement => (
                                            <th
                                                key={`${title}-head`}
                                                className="text-sm font-medium text-white px-6 py-4"
                                            >
                                                {title}
                                            </th>
                                        ))
                                    }
                                    <th
                                        key="action-head"
                                        className="text-sm font-medium text-white px-6 py-4"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map((data, indexUp): ReactElement => {
                                        const ITEMS = Object.values(data);
                                        return (
                                            <tr key={`${data._id}-tr`} className="bg-white border-b text-center">
                                                {
                                                    ITEMS.map((value, index): ReactElement => (
                                                        <td
                                                            key={`${data._id}-td_${index}`}
                                                            className='text-sm px-6 py-4'
                                                        >
                                                            {value}
                                                        </td>
                                                    ))
                                                }
                                                <td>
                                                    <button
                                                        className="bg-red-500 hover:bg-red-600 text-white text-center py-2 px-2 rounded-full inline-flex items-center"
                                                        onClick={ () => BorrarDato(data._id, indexUp) }
                                                    >
                                                        <TrashIcon className="h-4 w-4 text-white-600" aria-hidden="true" />
                                                    </button>
                                                    <button
                                                        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-2 rounded-full inline-flex items-center"
                                                        onClick={ () => ActualizarDato(data, indexUp) }
                                                    >
                                                        <PencilIcon className="h-4 w-4 text-white-600" aria-hidden="true" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {
                modal.delete && (
                    <Modal show={modal.delete} body={bodyModal}/>
                )
            }
        </>

    )
}

