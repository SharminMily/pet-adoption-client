import { useEffect, useState } from "react";
import { Table } from "flowbite-react";
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
            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              num
            </Table.HeadCell>

            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              Image
            </Table.HeadCell>

            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              Category
            </Table.HeadCell>

            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              Donation
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              delete
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {/*  */}
            {donations.map((item, index) => (
              <Table.Row
                key="id"
                className="e dark:border-gray-700 dark:bg-gray-800"
              >
                <p className=" font-bold mt-10 flex justify-center">
                  {" "}
                  {index + 1}
                </p>
                <Table.Cell className="">
                  <img
                    className="h-16 w-16 rounded-lg"
                    src={item.petImage}
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell>{item.petName}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>
                  <p className="text-[#1f52dd] font-semibold">
                    ${item.donatedAmount}
                  </p>{" "}
                </Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-red-500 hover:underline "
                  >
                    Delete
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllDonations;
