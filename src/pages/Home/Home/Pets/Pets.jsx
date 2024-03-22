/* eslint-disable no-unused-vars */
import { Button, Card, Dropdown } from "flowbite-react";
// import Image from 'next/image';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Pets = () => {
  return (
    <div className="md:mt-20 mt-4 md:m-4 m-2">
      <h1 className="text-center text-3xl  font-semibold mb-2">Lets Some <span className=" font-bold">Pets </span>Info </h1>
      
      <p className="text-center pb-8">Pets bring joy and companionship to our lives. Dogs, known for loyalty and playfulness, require regular exercise and training. <br /> Cats, independent and curious, thrive with proper nutrition and enrichment. Small pets like rabbits and guinea pigs <br />  need spacious enclosures and social interaction. Responsible care ensures a fulfilling life for all pets.</p>

      <div className="grid lg:grid-cols-4 grid-cols-2  justify-center md:gap-4 gap-1">
        {/* 1 */}
        <div className="">
          <Card className="max-w-sm bg-[#c5c9d3]">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/jg8GNN7/premium-photo-1664371674770-2fe1839c469b-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium ">
                Luxa Belle
              </h5>
              <span className="text-sm text-gray-700 ">Jack Smith</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                
                <button className="text-gray-100 px-5 py-1 rounded-full bg-slate-700  mx-8  flex gap-1 text-lg font-bold hover:bg-slate-600" > Details
        <HiOutlineArrowRight className="h-6 w-6 text-" />
      </button>

              </div>
            </div>
          </Card>
        </div>

        {/* 1 */}
        <div className="">
          <Card className="max-w-sm bg-[#c5c9d3]">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/KGLwKFm/photo-1591871937573-74dbba515c4c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium  text-gray-700">
                Max Duke
              </h5>
              <span className="text-sm text-gray-700">Sarah Jones</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
              <button className="text-gray-100 px-5 py-1 rounded-full bg-slate-700  mx-8  flex gap-1 text-lg font-bold hover:bg-slate-600" > Details
        <HiOutlineArrowRight className="h-6 w-6 text-" />
      </button>
              </div>
            </div>
          </Card>
        </div>

        {/* 3 */}
        <div className="">
          <Card className="max-w-sm bg-[#c5c9d3]">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/b6q1PVW/photo-1455145914126-c357157e2db0-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium  text-gray-700">
                Bella Rose
              </h5>
              <span className="text-sm text-gray-700">Mark Davis</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
              <button className="text-gray-100 px-5 py-1 rounded-full bg-slate-700  mx-8  flex gap-1 text-lg font-bold hover:bg-slate-600" > Details
        <HiOutlineArrowRight className="h-6 w-6 text-" />
      </button>
              </div>
            </div>
          </Card>
        </div>

        {/* 1 */}
        <div className="">
          <Card className="max-w-sm bg-[#c5c9d3]">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/fvjP473/photo-1555955924-a8c17aa846b2-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium  text-gray-700">
                Rocky Blue
              </h5>
              <span className="text-sm text-gray-700">Emma Brown</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
              <button className="text-gray-100 px-5 py-1 rounded-full bg-slate-700  mx-8  flex gap-1 text-lg font-bold hover:bg-slate-600" > Details
        <HiOutlineArrowRight className="h-6 w-6 text-" />
      </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pets;
