import { useLoaderData } from "react-router-dom";
/* eslint-disable no-unused-vars */
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Label, Select, TextInput, Textarea } from "flowbite-react";

import Swal from "sweetalert2";

import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env. VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdatePet = () => {

  const {_id, petName, petLocation, petAge, petImage, description, category} = useLoaderData();


  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()

//   const onSubmit = async (data) => {   
//     //image
//     const imageFile = { image: data.petImage[0]}
//     const res = await axiosPublic.post(image_hosting_api, imageFile, {
//       headers: {
//         'content-type': 'multipart/form-data'
//       }
//     })
//     if(res.data.success){
//       const allPets = {
//         petName: data.petName,
//         petAge: data.petAge,
//         petLocation: data.petLocation,
//         description: data.description,
//         category: data.category,
//         petImage: res.data.data.display_url
//       }
//       // 
//       const petRes = await axiosSecure.patch(`/allPets/${_id}`, allPets)
//       console.log(petRes.data)
//       if(petRes.data.modifiedCount > 0){
//         // reset();
//         Swal.fire({
//           position: "top-center",
//           icon: "success",
//           title: `${data.petName} is updated to the card.`,
//           showConfirmButton: false,
//           timer: 1500
//         });  
      
//       }
//     }
//     console.log('from data', data);
// }

const onSubmit = async (data) => {
    // console.log(data)
    // 
    const imageFile = { image: data.petImage[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })

    if (res.data.success) {
        // 
        const petItem = {
                    petName: data.petName,
                    petAge: data.petAge,
                    petLocation: data.petLocation,
                    description: data.description,
                    category: data.category,
                    petImage: res.data.data.display_url        
        }
        const petRes = await axiosSecure.patch(`/allPets/${_id}`, petItem);
        // console.log(campRes.data)
        if (petRes.data.modified > 0) {
            reset();
                     
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.petName} is updated to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    // console.log('with image url ', res.data)
}


  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">Update Pet</h1>

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
              defaultValue={petName}
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
              defaultValue={petAge}
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
              defaultValue={petLocation}
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
            <Select
             defaultValue={category}

              {...register("category", { required: true })}
              type="text"             
              id="countries"              
            >
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
             defaultValue={description}
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

          <button
            type="submit"
            className="btn flex items-center  bg-slate-700 text-gray-100 p-2  text-base"
          >
           Update Pet{" "}
            <BsArrowLeftCircleFill className="ml-2"></BsArrowLeftCircleFill>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePet;
