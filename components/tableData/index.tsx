// FC = Function Component
import { FC, useState } from "react";

// components
import Head from "./head";
import Body from "./body";
import { TableDynamic } from "../../types/table";
import Logic from "./Logic";
import dynamic from "next/dynamic";
import ReactDom from "react-dom";

type PropsTable = {
    tableData: Array<TableDynamic>,
    selectedModel: string
};

const Button = dynamic(() => import("../button"))

const TableData: FC<PropsTable> = ({ tableData, selectedModel }) => {

    const [modal, setShowModal] = useState({ edit: false, delete: false });
    const [bodyModal, setBodyModal] = useState({ title: "", info:"", textButton: "", type: ""});

    const BorrarData = () => {
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
        const DIV = document.querySelector("#inject");
        ReactDom.createPortal(<Button type="pencil" onClicEvent={() => console.log("HOLA desde editar")} />, DIV);
    };

    const { titlesData } = Logic(tableData);
    return (
        <section id="table" className="w-full relative py-8 md:py-16 lg:py-24 xl:py-30 border-t border-gray-200 px-8 xl:px-0">
                       <div id="inject"></div>
            <div className="container max-w-6xl mx-auto h-full flex flex-col justify-between items-center">
                <h3 className="font-black  mt-2 sm:mt-0 px-5 sm:px-0 sm:text-3xl max-w-2xl leading-tight text-gray-900 text-center">
                    Información del modelo <span className="text-indigo-600">{selectedModel}</span>
                </h3>
                <div className="mt-10">
                    <table className="table-auto">
                        { <Head titlesData={titlesData} /> }
                        { <Body bodyData={tableData} Actions={{ borrar: () => BorrarData() }} /> }
                    </table>
                </div>
            </div>
                {/* {
                    modal.delete && (<Modal show={modal.delete} body={bodyModal} />)
                } */}
        </section>
    );
};

export default TableData;
