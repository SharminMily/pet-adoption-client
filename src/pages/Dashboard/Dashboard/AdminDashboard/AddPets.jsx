import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

import { Label, Select, TextInput, Textarea } from "flowbite-react";

const AddPets = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    //
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
              {...register("location", { required: true })}
              type="text"
              id="input-gray"
              placeholder="pet Name"
              required
              color="gray"
            />
          </div>

          {/* Time and Date */}
          <div className="flex gap-2">
            {/* Date */}
            
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="year" />
            </div>
            <TextInput
              {...register("location", { required: true })}
              type="date"
              id="input-gray"
              placeholder="Years"
              required
              color="gray"
            />
          </div>

            {/*location */}
{/*             
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Location" />
            </div>
            <TextInput
              {...register("location", { required: true })}
              type=""
              id="input-gray"
              placeholder="Locations"
              required
              color="gray"
            />
          </div> */}

          </div>            

          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Locations" />
            </div>
            <TextInput
              {...register("location", { required: true })}
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
            <Select {...register("category")} type="text" id="countries" required>
              <option value="Dog">Dog</option>
              <option value="Cat">Pet</option>
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
              {...register("details")}
              type="text"
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              color="gray" value="Gray"
            />
          </div>

          {/* image uploaded */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn flex items-center  bg-slate-700 text-gray-100 p-2  text-base">
            Add Pet <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPets;
