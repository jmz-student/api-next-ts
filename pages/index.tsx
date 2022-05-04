import { NextPage, GetServerSideProps } from 'next';
import Style from "styled-components";
import { Client } from '@Utils';
import { TypeActions } from '../types/Client';
import { ListModels } from 'components/listModels';
import { GralObject } from '../types/Utilities';

export const getServerSideProps: GetServerSideProps = async () => {
    const data = {
        modelo: "",
        action: TypeActions.READ,
    }
    const ApiClient = Client;
    const Data: GralObject = await ApiClient(data);
    return {
        props: {
           ...Data
        }
    }
};

const Title = Style.h1`
    color: red;
    background-color: #C0C0C0;
`;

const Home: NextPage = (props) => {
    return <ListModels {...props}/>
}
export default Home;
