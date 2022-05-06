import { ReactElement, useEffect, useState, ChangeEvent } from 'react';
import Client from '../../src/utilities/Client';
import { TypeActions } from '../../types/Client';
import GetTableData from '../../src/utilities/GetTableData'
import { GralObject } from '../../types/Utilities';
import { default as logo } from '../../public/svg/logo.svg';
import { TableData } from 'components/tableData';

export const ListModels = (props: GralObject): ReactElement => {
    const [selectedModel, setSelectedModel] = useState<string>("");
    const [dataModels, setDataModels] = useState<GralObject>({})
    const [tableDat, setTableDat] = useState<Array<GralObject>>([])
    const MODELS: Array<string> = Object.keys(props)
    MODELS.shift();

    useEffect(() => {
        let data = {
            modelo: selectedModel,
            action: TypeActions.READ,
        }
        const Request = async() => {
            const Data: GralObject = await Client(data);
            setDataModels(Data);
            let dataa = Data.data ?? []
            const tableDatas = GetTableData(dataa, selectedModel);
            setTableDat(tableDatas)
        }
        Request();

    },[selectedModel])

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const valueOption = e.target.value
        setSelectedModel(valueOption)
    }
  return (
    <>
        <div className="antialiased overflow-x-hidden">
            <header id="header" className="h-24 w-full relative z-50">
                <div className="container max-w-6xl mx-auto h-full flex justify-center sm:justify-between items-center px-8 xl:px-0">
                    <div className="inline-block h-full flex items-center h-5 relative font-black leading-none">
                        <svg className="h-6 w-auto fill-current text-indigo-600" viewBox="0 0 194 116" xmlns="http://www.w3.org/2000/svg">
                            <g fillRule="evenodd">
                                <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
                            </g>
                        </svg>
                        <span className="text-xl text-gray-800">JAMC</span>
                    </div>
                    <div className="absolute left-0 md:relative w-full md:w-auto md:bg-transparent border-b md:border-none borde
                    r-gray-200 mt-48 md:mt-0 flex-col md:flex-row pb-8 md:p-0 justify-center items-center md:items-end hidden md:flex md:justify-between">
                        <div className="w-10"></div>
                        <div className="w-40"></div>
                        <svg className="hidden lg:block absolute w-screen max-w-3xl -mt-64 -ml-12 left-0 top-0"
                            viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                                    <stop stopColor="#E614F2" offset="0%" />
                                    <stop stopColor="#FC3832" offset="100%" />
                                </linearGradient>
                                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
                                    <stop stopColor="#657DE9" offset="0%" />
                                    <stop stopColor="#1C0FD7" offset="100%" />
                                </linearGradient>
                                <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                                    id="a">
                                    <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                                    id="d">
                                    <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <path
                                    d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
                                    id="b" />
                                <path
                                    d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
                                    id="e" />
                            </defs>
                            <g fill="none" fillRule="evenodd" opacity=".9">
                                <g transform="rotate(65 416.452 409.167)">
                                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                                    <use fill="url(#c)" xlinkHref="#b" />
                                </g>
                                <g transform="rotate(29 421.929 414.496)">
                                    <use fill="#000" filter="url(#d)" xlinkHref="#e" />
                                    <use fill="url(#f)" xlinkHref="#e" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </header>
            <section className="w-full justify-center items-center relative  overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
                <div className="container max-w-6xl mx-auto h-full lg:flex-row justify-between items-center -mt-32 px-8 xl:px-0">
                    <div className="flex flex-col items-center lg:items-start w-full pt-48 lg:pt-20 xl:pt-40 text-center lg:text-left z-30">
                        <div className="">
                            <h1 className="text-gray-900 font-black text-3xl sm:text-6xl leading-tight relative w-max mb-4 xl:mb-8">Sistema CRUD dinámico</h1>
                            <div className="text-base sm:text-lg xl:text-xl text-gray-600 mb-8">
                                Tecnologías utilizadas: TypeScript, React, Next y MongoDB
                            </div>
                            <div className="fold-bold">
                                <select id="models" defaultValue="default" className="bg-indigo-600 text-white font-bold capitalize border border-t border-gray-200 rounded-md shadow-xl p-3 text-left cursor-default focus:outline-none" onChange={(e) => handleChange(e)}>
                                    <option value="default" className="capitalize font-medium" disabled selected >Selecciona un modelo</option>
                                    {MODELS.map((model: string) => (
                                        <option key={`key-${model}`} value={model} className="capitalize bg-white text-indigo-600 font-medium">{model}</option>
                                    ))}
                                </select>
                              </div>
                              <TableData tableDat={tableDat} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
