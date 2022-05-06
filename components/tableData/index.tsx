import React, { ReactElement } from 'react'
import { TableDynamic } from 'types/table'

export const TableData = ({ tableDat = [] }: { tableDat: Array<TableDynamic> }): ReactElement => {
    const AUX = tableDat[0] || {};
    const KEY:Array<string> = Object.keys(AUX);
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
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
                                            </th>))
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
                                        tableDat.map((data): ReactElement => {
                                            const ITEMS = Object.values(data);
                                            return (
                                                <tr key={`${data}._id-tr`}  className="bg-white border-b">
                                                    {
                                                        ITEMS.map((value): ReactElement => (
                                                            <td
                                                                key={`${data}._id-td`}
                                                                className='text-sm font-medium text-red px-6 py-4'
                                                            >
                                                                {value}
                                                            </td>
                                                        ))
                                                    }
                                                    <td>Action</td>
                                                </tr>
                                            )
                                        })
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

