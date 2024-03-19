import{ useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
const AllDonations = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/donations")
        .then((res) => res.json())
        .then((data) => setDonations(data));
    }, []);
    return (
        <div>
                <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                     
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
                            donations.map((item, index) => <Table.Row key="id" className="bg-white dark:border-gray-700 dark:bg-gray-800">
                               
                                <p className=' font-bold mt-10 flex justify-center'>  {index + 1}</p>
                                <Table.Cell className="">
                                    <img className='h-16 w-16 rounded-lg' src={item.
                                        petImage
                                    } alt="" />

                                </Table.Cell>
                                <Table.Cell>{item.petName}</Table.Cell>
                                <Table.Cell>{item.
                                    category}</Table.Cell>
                                <Table.Cell ><p className='text-fuchsia-600 font-semibold'>${item.donatedAmount}</p> </Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
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

export default AllDonations;