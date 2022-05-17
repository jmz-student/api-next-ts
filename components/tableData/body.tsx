import { FC, ReactElement } from "react";
import { TableDynamic } from 'types/table';
import Button from "../button";
import { TrashIcon, PencilIcon, PlusCircleIcon } from '@heroicons/react/outline'
type PropsTableBody = {
    bodyData: Array<TableDynamic>,
    Actions: { [key: string]: Function },
};

const Body: FC<PropsTableBody> = ({ bodyData, Actions }) => (
    <tbody>
        {
            bodyData.map((data, indexUp): ReactElement => {
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
                                <Button type="trash" onClicEvent={() => Actions.borrar()} />
                                <Button type="pencil" onClicEvent={() => console.log("HOLA desde editar")} />
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    </tbody>
);

export default Body;
