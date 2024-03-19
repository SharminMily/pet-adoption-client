/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const AllPetsDetails = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    // const [, refetch] = useCart();

    const pet = useLoaderData();
    // console.log(pet);
    const {
      _id,
      category,
      description,
      donatedAmount,
      petAge,
      petImage,
      petLocation,
      petName,
    } = pet;

    const handleAddCart = pet => {
        
        if(user &&  user.email){
            // send cart
            console.log(user.email, pet)
            const cartItem = {
                petId: _id,
                email: user.email,
                petName,
                petImage,
                category,

            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
               if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${petName} added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
               }

            })

        }
        else{
            // 
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/signIn', { state: { from: location } })
                }
            });
        }
    }
  
    return (
        <div className="my-20">
             <h1 className="text-3xl text-center m-16  font-semibold">
        Pet <span className="text-fuchsia-700 font-bold">Details</span>{" "}
        Here
      </h1>

      <div className="flex justify-center pb-20">
        <div className="max-w-4xl lg:flex  justify-between  border-4 border-fuchsia-700 shadow-xl shadow-slate-500">
          <div className="lg:w-1/3">
            <img className="w-full h-full" src={petImage} alt="" />
          </div>

          <div className="lg:w-2/3 px-8 py-2">
            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
              Category :
              <span className="text-xl text-fuchsia-700 font-bold">
                {" "}
                {category}
              </span>
            </h5>
            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
              Pet Name :
              <span className="text-xl text-fuchsia-700 font-bold">
                {" "}
                {petName}
              </span>
            </h5>

            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
              Pet Age :
              <span className="text-xl text-fuchsia-700 font-bold">
                {" "}
                {petAge} years
              </span>
            </h5>
           
            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white pb-2">
              Pet Location :
              <span className="text-xl text-fuchsia-700 font-bold ">
                {" "}
                {petLocation}
              </span>
            </h5>

            <p className="font-normal dark:text-gray-400 text-sm text-gray-500">
              {description}
            </p>

            <button onClick={handleAddCart}              
              className="bg-fuchsia-900 text-white font-semibold w-full rounded-lg p-2 mt-2 hover:bg-fuchsia-950"
              type="submit"
            >
              Adopt
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllPetsDetails;