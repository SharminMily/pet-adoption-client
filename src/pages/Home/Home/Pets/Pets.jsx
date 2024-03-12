/* eslint-disable no-unused-vars */
import { Button, Card, Dropdown } from "flowbite-react";
// import Image from 'next/image';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Pets = () => {
  return (
    <div className="mt-20 m-4">
      <div className="grid lg:grid-cols-4 grid-cols-2  justify-center gap-4">
        {/* 1 */}
        <div className="">
          <Card className="max-w-sm bg-fuchsia-950">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/jg8GNN7/premium-photo-1664371674770-2fe1839c469b-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium  dark:text-white text-white">
                Luxa Belle
              </h5>
              <span className="text-sm text-gray-200 ">Jack Smith</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                
                <button className="text-black px-5 py-1 rounded-full bg-white mx-8  flex gap-1 text-xl font-bold hover:bg-slate-200" > Details
        <HiOutlineArrowRight className="h-6 w-6 text-" />
      </button>

              </div>
            </div>
          </Card>
        </div>

        {/* 1 */}
        <div className="">
          <Card className="max-w-sm bg-fuchsia-950">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/KGLwKFm/photo-1591871937573-74dbba515c4c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium  dark:text-white text-white">
                Max Duke
              </h5>
              <span className="text-sm text-gray-200 ">Sarah Jones</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
              <button className="text-black px-5 py-1 rounded-full bg-white mx-8  flex gap-1 text-xl font-bold hover:bg-slate-200" > Details
        <HiOutlineArrowRight className="h-6 w-6 text-" />
      </button>
              </div>
            </div>
          </Card>
        </div>

        {/* 3 */}
        <div className="">
          <Card className="max-w-sm bg-fuchsia-950">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/b6q1PVW/photo-1455145914126-c357157e2db0-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium  dark:text-white text-white">
                Bella Rose
              </h5>
              <span className="text-sm text-gray-200 ">Mark Davis</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
              <button className="text-black px-5 py-1 rounded-full bg-white mx-8  flex gap-1 text-xl font-bold hover:bg-slate-200" > Details
        <HiOutlineArrowRight className="h-6 w-6 text-" />
      </button>
              </div>
            </div>
          </Card>
        </div>

        {/* 1 */}
        <div className="">
          <Card className="max-w-sm bg-fuchsia-950">
            <div className="flex justify-end px-2 pt-0 "></div>
            <div className="flex flex-col items-center pb-2">
              <img
                className="h-32 w-32 rounded-full"
                src="https://i.ibb.co/fvjP473/photo-1555955924-a8c17aa846b2-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg"
                alt=""
              />

              <h5 className="mb-1 pt-2 text-xl font-medium  dark:text-white text-white">
                Rocky Blue
              </h5>
              <span className="text-sm text-gray-200 ">Emma Brown</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
              <button className="text-black px-5 py-1 rounded-full bg-white mx-8  flex gap-1 text-xl font-bold hover:bg-slate-200" > Details
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
