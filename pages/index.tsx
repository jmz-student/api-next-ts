import { NextPage, GetServerSideProps } from 'next';
import Style from "styled-components";
import { QR } from 'components/qr';
import { Client } from '@Utils';

export const getServerSideProps: GetServerSideProps = async() => {
    const CLIENT = Client.instance;
    // 62631be844ee11d37a993a25
    const READ = await CLIENT.delete("62631be844ee11d37a993a25");
    console.log(READ)
    return {
        props: {
            dato: READ,
        }
    }
};



const Title = Style.h1`
    color: red;
    background-color: #C0C0C0;
`;

const Home: NextPage = (porps) => {
    return <QR/>
}
export default Home;
