import { Table } from "flowbite-react";
import useCart from "../../../../hooks/useCart";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddCard = () => {
  const [cart, refetch] = useCart();
  // console.log(cart)

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>

            <Table.HeadCell className="bg-slate-300 ">
              {" "}
              num
            </Table.HeadCell>

            <Table.HeadCell className="bg-slate-300">
              {" "}
              Image
            </Table.HeadCell>

            <Table.HeadCell className="bg-slate-300">
              {" "}
              Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-300">
              {" "}
              Category
            </Table.HeadCell>

            {/* <Table.HeadCell className="bg-fuchsia-700 text-white">
              {" "}
              Edit
            </Table.HeadCell> */}
            <Table.HeadCell className="bg-slate-300">
              {" "}
              delete
            </Table.HeadCell>

          
          </Table.Head>

          <Table.Body className="divide-y">
            {/*  */}
            {cart.map((item, index) => (
              <Table.Row
                key={item.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <p className=" font-bold mt-10 flex justify-center">
                  {" "}
                  {index + 1}
                </p>
                <Table.Cell className="">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={item.petImage}
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.petName}</Table.Cell>
                {/* <Table.Cell>update</Table.Cell> */}
                <Table.Cell>
                  <a
                    onClick={() => handleDelete(item._id)}
                    href="#"
                    className="font-medium text-red-500 hover:underline "
                  >
                    delete
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

export default AddCard;
