/* eslint-disable no-unused-vars */
import {Table } from 'flowbite-react';
import usePets from '../../../../hooks/usePets';

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageAllPets = () => {
    const [pets, refetch] = usePets();
    const axiosSecure = useAxiosSecure()

 
    
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/allPets/${item._id}`);
                // console.log(res.data) res.data.deletedCount > ;
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${item.petName} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    

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
                            pets.map((item, index) => <Table.Row key={item._id} className="dark:border-gray-700 dark:bg-gray-800">                                
                                <p className=' font-bold mt-10 flex justify-center'>  {index + 1}</p>
                                <Table.Cell className="">
                                    <img className='h-16 w-16 rounded-lg' src={item.
                                        petImage
                                    } alt="" />

                                </Table.Cell>
                                <Table.Cell>{item.category}</Table.Cell>
                                <Table.Cell>{item.
                                    petName}</Table.Cell>

                                <Link to={`/dashboard/updatePet/${item._id}`} className="text-xl text-[#97999e] hover:underline w-10" >
                                <FaEdit />
                                      
                                    </Link>
                                
                                <Table.Cell >
                                    <Link  onClick={() => handleDeleteItem(item)} className="text-2xl text-red-600 hover:underline w-10" >
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