import { FC, ReactElement } from "react";

type PropsTableHead = {
    titlesData: Array<string>,
};

const Head: FC<PropsTableHead> = ({ titlesData = [] }) => (
    <thead className="border-b bg-gray-800">
        <tr>
            {
                titlesData.map((title): ReactElement => (
                    <th key={`${title}-head`} className="text-sm font-medium text-white px-6 py-4">
                        {title}
                    </th>
                ))
            }
            <th key="action-head" className="text-sm font-medium text-white px-6 py-4">
                Actions
            </th>
        </tr>
    </thead>
);

export default Head;
