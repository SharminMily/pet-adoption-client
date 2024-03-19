/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";
import { useState } from "react";
import { Modal } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Dropdown } from "flowbite-react";
const DonationDetails = () => {
  const donation = useLoaderData();
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

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="my-10 justify-center">
      <h1 className="text-3xl text-center m-16  font-semibold">
        Donations <span className="text-fuchsia-700 font-bold">Details</span>{" "}
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
            <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
              Donation :
              <span className="text-xl text-fuchsia-700 font-bold">
                {" "}
                ${donatedAmount}{" "}
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

            <button
              onClick={() => setOpenModal(true)}
              className="bg-fuchsia-900 text-white font-semibold w-full rounded-lg p-2 mt-2 hover:bg-fuchsia-950"
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
              <h1>{petName}</h1>

              <form className="flex max-w-md flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="Donations Amount"
                    required
                  />
                </div>
                <div>
                  {/* <div className="mb-2 block">
                    <Label htmlFor="password1" value="" />
                  </div>
                  <TextInput id="password1" type="password" required 
                  
                   /> */}
                    <Dropdown className="border" label="Dropdown" inline>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
                 
                </div>
                <button
                  className="bg-fuchsia-900 text-white font-semibold py-2 rounded-lg hover:bg-fuchsia-950"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default DonationDetails;
