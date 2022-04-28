import { ReactElement, useState, ChangeEvent, MouseEvent} from "react";
import { Wrapper } from "./Styles";
import Image from "next/image"
import GetHexaColor from "../../src/utilities/GetHexaColor";

type ItemsQR = string | number | undefined;
const QR_API = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=ffffff&data=";

const Generator = (): ReactElement => {
    const [data, setData] = useState<ItemsQR>("");
    const [imgSrc, setImgSrc] = useState<string>(`${QR_API}dummy`);

    const setInputData = (event: ChangeEvent<HTMLInputElement>): void => {
        const VALUE: ItemsQR = event.target.value;
        setData(VALUE);
    };

    const ButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const URL_QR = `${QR_API}${data}&bgcolor=${GetHexaColor()}`;
        setImgSrc(URL_QR);
    }

    return (
        <Wrapper>
            <label>Texto a convertir</label>
            <input type="text" onChange={(event) => setInputData(event) }/>
            <button onClick={(event) => ButtonClick(event)} >QR</button>
            <Image loader={() => imgSrc} height={250} width={250} src={imgSrc} />
        </Wrapper>
    )
}

export default Generator;
