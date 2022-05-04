import { ReactElement, useEffect, useState, ChangeEvent } from 'react';
import Client from '../../src/utilities/Client';
import { TypeActions } from '../../types/Client';
import { GralObject } from '../../types/Utilities';


export const ListModels = (props: GralObject): ReactElement => {
    const [selectedModel, setSelectedModel] = useState<string>("");
    const [dataModels, setDataModels] = useState<GralObject>({})
    const MODELS: Array<string> = Object.keys(props)
    MODELS.shift();
    console.log(MODELS, 'list')

    useEffect(() => {
        let data = {
            modelo: selectedModel,
            action: TypeActions.READ,
        }
        const Request = async() => {
            const Data: GralObject = await Client(data);
            setDataModels(Data);
            return Data;
        }
        Request()

    },[selectedModel])


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const valueOption = e.target.value
        setSelectedModel(valueOption)
    }

  return (
    <>
        <div className="flex justify-center">
            <select id="models" onChange={(e) => handleChange(e)}>
                <option value="">Selecciona un modelo</option>
                {MODELS.map((model: string) => (
                    <option key={`key-${model}`} value={model}>{model}</option>
                ))}
            </select>
        </div>
    </>
  )
}
