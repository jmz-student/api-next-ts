// import { GetServerSideProps, NextPage } from 'next';
// import { RequestApi } from "@Utils";
// import { AllModel } from '../../types/Utilities';

// interface PropsModels {
//     props: {
//         data: Array<AllModel>
//     }
// }


// export const getServerSideProps: GetServerSideProps = async (context): Promise<PropsModels> => {
//     const { model = "" } = context.params;
//     const DATA = await RequestApi(model);
//     const DATA_2: Array<AllModel> = DATA.data;
//     return {
//         props:
//             { data: DATA_2 }
//     }
// };


// const Models: NextPage = (props) => {
//     console.log(props.data);


//     const Table = () => {
//         return (
//             <><table className="min-w-full text-center">
//                 <thead className="border-b bg-gray-800">
//                     <tr>
//                         <th className="text-sm font-medium text-white px-6 py-4">ID</th>
//                         <th className="text-sm font-medium text-white px-6 py-4">Name</th>
//                         <th className="text-sm font-medium text-white px-6 py-4">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td></td>
//                     </tr>
//                 </tbody>
//             </table></>
//     )
//     }
//     return <h1>HOLA</h1>;
// };

// export default Models;
