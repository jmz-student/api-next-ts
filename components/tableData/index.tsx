// FC = Function Component
import { FC } from "react";

// components
import Head from "./head";
import Body from "./body";
import { TableDynamic } from '../../types/table';
import Logic from "./Logic";


type PropsTable = {
    tableData: Array<TableDynamic>,
    selectedModel: string
};

const TableData: FC<PropsTable> = ({ tableData, selectedModel }) => {
    const { titlesData = [] } = Logic(tableData);
    return (
        <section id="table" className="w-full relative py-8 md:py-16 lg:py-24 xl:py-30 border-t border-gray-200 px-8 xl:px-0">
            <div className="container max-w-6xl mx-auto h-full flex flex-col justify-between items-center">
                <h3 className="font-black  mt-2 sm:mt-0 px-5 sm:px-0 sm:text-3xl max-w-2xl leading-tight text-gray-900 text-center">
                    Información del modelo <span className="text-indigo-600">{selectedModel}</span>
                </h3>
                <div className="mt-10">
                    <table className="table-auto">
                        { <Head titlesData={titlesData} /> }
                        { <Body bodyData={tableData} selectedModel = {selectedModel} /> }
                    </table>
                </div>
            </div>
            <div id="containerModal" />
            <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </section>
    );
};

export default TableData;
