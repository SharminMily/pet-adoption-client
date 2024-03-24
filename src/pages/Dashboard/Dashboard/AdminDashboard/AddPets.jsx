/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import { Label, Select, TextInput, Textarea } from "flowbite-react";

const image_hosting_key = import.meta.env. VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

import useAxiosPublic from "../../../../hooks/useAxiosPublic"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import Swal from "sweetalert2";

const AddPets = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()

  const onSubmit = async (data) => {   
    //image
    const imageFile = { image: data.petImage[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    if(res.data.success){
      const allPets = {
        petName: data.petName,
        petAge: data.petAge,
        petLocation: data.petLocation,
        description: data.description,
        category: data.category,
        petImage: res.data.data.display_url
      }
      // 
      const petRes = await axiosSecure.post('/allPets', allPets)
      // console.log(petRes.data)
      if(petRes.data.insertedId){
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.petName} is added to the card.`,
          showConfirmButton: false,
          timer: 1500
        });  
      
      }
    }
    // console.log('from data', data);


  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">Add Pets</h1>

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* PetName */}
       
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Name" />
            </div>
            <TextInput
              {...register("petName", { required: true })}
              type="text"
              id="input-gray"
              placeholder="pet Name"
              required
              color="gray"
            />
          </div>      
            
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="" />
            </div>
            <TextInput
              {...register("petAge", { required: true })}
              type="date"
              id="input-gray"
              placeholder="Years"
              required
              color="gray"
            />
          </div>   

         
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Locations" />
            </div>
            
            <div>
            <TextInput
              {...register("petLocation", { required: true })}
              type="text"
              id="input-gray"
              placeholder="Locations"
              required
              color="gray"
            />
          </div>

          <div className="">
            <div className="mb-2 block">
              <Label
                htmlFor="countries input-gray"
                value="Select your category"
                color="gray"
              />
            </div>
            <Select defaultValue="default" {...register("category", { required: true })} type="text" id="countries" required>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">Rabbit</option>
            </Select>
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label
                htmlFor="comment input-gray"
                value="Pet details"
                color="gray"
              />
            </div>
            <Textarea
              {...register("description", { required: true })}
              type="text"
              id="comment"
              placeholder="Details..."
              required
              rows={4}
              color="gray" 
            />
          </div>

          {/* image uploaded */}
          <div className="form-control w-full my-6">
            <input
              {...register("petImage", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button type="submit" className="btn flex items-center  bg-slate-700 text-gray-100 p-2  text-base">
            Add Pet <BsArrowLeftCircleFill className="ml-2"></BsArrowLeftCircleFill>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPets;
