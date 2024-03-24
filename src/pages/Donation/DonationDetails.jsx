/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";
import { useState } from "react";
import { Modal } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const DonationDetails = () => {
  const donation = useLoaderData();
  const [openModal, setOpenModal] = useState(false);
  // console.log(donation);
  const {
    _id,
    category,
    description,
    donatedAmount,
    petAge,
    petImage,
    petLocation,
    petName,
  } = donation;


  const { register, handleSubmit, reset} = useForm();
  
  const onSubmit = async (data) => {
    // console.log(data)

    fetch('http://localhost:5000/myDonations', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {

      console.log(data)
    })

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Donation saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
 

  return (
    <div className="my-10 justify-center">
      <h1 className="text-3xl text-center m-16  font-semibold">
        Donations <span className="text- font-bold">Details</span>{" "}
        Here
      </h1>

      <div className="flex justify-center pb-20">
        <div className="max-w-4xl lg:flex  justify-between  border-4 border- shadow-xl shadow-slate-500">
          <div className="lg:w-1/3">
            <img className="w-full h-full" src={petImage} alt="" />
          </div>

          <div className="lg:w-2/3 px-8 py-2">
            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
              Category :
              <span className="text-xl text- font-bold">
                {" "}
                {category}
              </span>
            </h5>
            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
              Pet Name :
              <span className="text-xl text- font-bold">
                {" "}
                {petName}
              </span>
            </h5>

            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
              Pet Age :
              <span className="text-xl text- font-bold">
                {" "}
                {petAge} years
              </span>
            </h5>
            <h5 className="text-xl tracking-tight  dark:text-white">
              Donation :
              <span className="text-xl text- font-bold">
                {" "}
                ${donatedAmount}{" "}
              </span>
            </h5>
            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white pb-2">
              Pet Location :
              <span className="text-xl text- font-bold ">
                {" "}
                {petLocation}
              </span>
            </h5>

            <p className="font-normal dark:text-gray-400 text-sm text-gray-500">
              {description}
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="bg-slate-500  font-semibold w-full text-gray-50 rounded-lg p-2 mt-2 hover:bg-slate-600"
              type="submit"
            >
              Donat Now
            </button>
          </div>
        </div>
      </div>

      <>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <h1 className="text-fuchsia-700 font-semibold text-xl">
                {/* {category} : {petName} */}
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="" value="Your Donations Amount " />
                  </div>

                  {/* <div>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Name" />
            </div>
            <TextInput
              {...register("petName", { required: true })}
              type="text"
              id="input-gray"
              defaultValue={petName}
              placeholder="pet Name"
              required
              color="gray"
            />
                 </div> */}


                 <div>
                 <TextInput {...register("petImaage", { required: true })}
                    id="name"
                    type="taxt"
                    value={petImage}
                    placeholder="Donations Amount $00"
                    required
                  />
                 </div>

                 <div className="pt-4">
                 <TextInput {...register("petName", { required: true })}
                    id="name"
                    type="taxt"
                    value={petName}
                    placeholder="Donations Amount $00"
                    required
                  />
                 </div>

                  <div className="pt-4">
                  <TextInput {...register("donatedAmount", { required: true })}
                    id="number"
                    type="number"
                    placeholder="Donations Amount $00"
                    required
                  />
                  </div>

                 
                  <input className="w-full mt-0 rounded-lg"  /> 
                    <select  {...register("card", { required: true })} className="w-full rounded-lg border border-gray-500 "
                      placeholder="type of card"
                      >                     
                      <option value="Mastercard">Mastercard</option>
                      <option value="Maestro">Maestro</option>
                      <option value="JCB">JCB</option>
                      <option value="Other">Other</option>
                    </select>  

                <button
                  className="bg-slate-600 w-full mt-3 text-white font-semibold py-2 rounded-lg hover:bg-slate-700"
                  type="submit"
                >
                  Submit
                </button>

                </div>
               
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default DonationDetails;
