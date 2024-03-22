import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { Table } from "flowbite-react";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl text-center font-semibold ">All <span className="text-[#8a8c92]">Users</span>  </h1>
        {/* <h2 className="text-3xl ">Total Users : {users.length}</h2> */}
      </div>

      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              num
            </Table.HeadCell>

            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              Name
            </Table.HeadCell>

            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              Email
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              Role
            </Table.HeadCell>

            <Table.HeadCell className="bg-[#DCE0EB]">
              {" "}
              delete
            </Table.HeadCell>

          </Table.Head>

          <Table.Body className="divide-y">
            {users.map((user, index) => (
              <Table.Row
                key={user._id}
                className=" dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell ><div className="font-bold text-[#818286]">{index + 1}</div>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.name}
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>

                {user.role === "admin" ? (
                  "Admin"
                ) : (
                  <Table.Cell onClick={() => handleMakeAdmin(user)}>
                    user
                  </Table.Cell>
                )}

                <Table.Cell>
                  <a
                    onClick={() => handleDeleteUser(user)}
                    href="#"
                    className="text-2xl text-red-600 hover:underline "
                  >
                    <MdDeleteForever />
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

export default AllUsers;
