/* eslint-disable no-unused-vars */
import { Checkbox, Table } from 'flowbite-react';
import usePets from '../../../../hooks/usePets';

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { Link } from 'react-router-dom';

const ManageAllPets = () => {
    const [pets, refetch] = usePets();
    return (
        <div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head className='bg-[]'>
                       
                    <Table.HeadCell className='bg-[#DCE0EB] '> num</Table.HeadCell>  


                        <Table.HeadCell className='bg-[#DCE0EB]'> Image</Table.HeadCell>

                        
                        <Table.HeadCell className='bg-[#DCE0EB]'> Name</Table.HeadCell>
                        <Table.HeadCell className='bg-[#DCE0EB]'> Category</Table.HeadCell>
                        
                        <Table.HeadCell className='bg-[#DCE0EB]'> Edit</Table.HeadCell>
                        <Table.HeadCell className='bg-[#DCE0EB]'> delete</Table.HeadCell>
                        
                    </Table.Head>


                    <Table.Body className="divide-y ">



                        {/*  */}
                        {
                            pets.map((item, index) => <Table.Row key={item.id} className="dark:border-gray-700 dark:bg-gray-800">                                
                                <p className=' font-bold mt-10 flex justify-center'>  {index + 1}</p>
                                <Table.Cell className="">
                                    <img className='h-16 w-16 rounded-lg' src={item.
                                        petImage
                                    } alt="" />

                                </Table.Cell>
                                <Table.Cell>{item.category}</Table.Cell>
                                <Table.Cell>{item.
                                    petName}</Table.Cell>
                                <Link href="#" className="text-xl text-[#97999e] hover:underline w-10" >
                                <FaEdit />
                                      
                                    </Link>
                                
                                <Table.Cell>
                                    <Link href="#" className="text-2xl text-red-600 hover:underline w-10" >
                                    <MdDeleteForever />
                                      
                                    </Link>
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