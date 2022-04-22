import { GetServerSideProps, NextPage } from 'next';
import { RequestApi } from "@Utils";
import { AllModel } from '../../types/Utilities';

interface PropsModels {
    props: {
        data: Array<AllModel>
    }
}


export const getServerSideProps: GetServerSideProps = async (context): Promise<PropsModels> => {
    const { model = "" } = context.params;
    const DATA = await RequestApi(model);
    const DATA_2: Array<AllModel> = DATA.data;
    return {
        props:
            { data: DATA_2 }
    }
};


const Models: NextPage = (props) => {
    console.log(props.data);
    return <h1>HOLA</h1>;
};

export default Models;
