/* eslint-disable no-unused-vars */
import { Checkbox, Table } from 'flowbite-react';
import usePets from '../../../../hooks/usePets';
const ManageAllPets = () => {
    const [pets, refetch] = usePets();
    return (
        <div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            <Checkbox />
                        </Table.HeadCell>
                        <Table.HeadCell>num</Table.HeadCell>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>category</Table.HeadCell>
                        {/* <Table.HeadCell>Delete</Table.HeadCell> */}
                        {/* <Table.HeadCell>Delete</Table.HeadCell> */}
                        <Table.HeadCell>
                            update
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                        <Table.HeadCell>Delete</Table.HeadCell>
                    </Table.Head>


                    <Table.Body className="divide-y">



                        {/*  */}
                        {
                            pets.map((item, index) => <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <p className=' font-bold mt-10 flex justify-center'>  {index + 1}</p>
                                <Table.Cell className="">
                                    <img className='h-16 w-16 rounded-lg' src={item.
                                        petImage
                                    } alt="" />

                                </Table.Cell>
                                <Table.Cell>{item.category}</Table.Cell>
                                <Table.Cell>{item.
                                    petName}</Table.Cell>
                                <Table.Cell>update</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        delete
                                    </a>
                                </Table.Cell>
                            </Table.Row>)
                        }



                    </Table.Body>



                </Table>
            </div>
        </div>
    );
};

export default ManageAllPets;