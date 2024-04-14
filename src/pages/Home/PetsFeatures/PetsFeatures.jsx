import { HiViewGrid } from "react-icons/hi";

const PetsFeatures = () => {
  return (
    <div className="lg:mx-0 lg:my-10 m-8">
      <h1 className="text-center text-4xl font-semibold">
        Pets <span className=" font-bold ">Features</span> Here
      </h1>

      <div className="grid lg:grid-cols-3 mt-8 border-2 shadow-lg shadow-gray-800 text-end">
        {/* 1 */}
        <div className="bg-[#dee0e4]  px-4 py-8">
          <div className="">
            <h1 className="flex lg:justify-end justify-center items-center gap-1 font-bold text-xl pb-2 lg:text-end">
              {" "}
              Adoption Application Process <HiViewGrid className="mt-2" />
            </h1>
            <p className="text-gray-600 pr-6  lg:text-end text-center">
            Provide a way for users to submit adoption applications online, including questions about their lifestyle, experience with pets, and reasons for adoption.
            </p>
          </div>

          {/* 2 */}
          <div className="mt-5">
            <h1 className="flex lg:justify-end justify-center items-center gap-1 font-bold text-xl pb-2 lg:text-end">
              {" "}
              Search and Filter Tools <HiViewGrid className="mt-2" />
            </h1>
            <p className="text-gray-600 pr-6  lg:text-end text-center">
              Provide advanced search and filtering options to help users narrow
              down their options based on criteria such as species, breed, age,
              size, location, and more.{" "}
            </p>
          </div>
          {/* 3 */}
          <div className="mt-5">
            <h1 className="flex lg:justify-end justify-center items-center gap-1 font-bold text-xl pb-2 lg:text-end">
              {" "}
              Donations and Fundraising <HiViewGrid className="mt-2" />
            </h1>
            <p className="text-gray-600 pr-6  lg:text-end text-center">
              Provide options for users to make donations, sponsor pets, or
              contribute to fundraising campaigns to support the operations and
              care of the organization.{" "}
            </p>
          </div>
        </div>
        {/* 2 */}
        <div>
          <img data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
            className="w-full h-full"
            src="https://i.ibb.co/XXJK7F4/photo-1526336024174-e58f5cdd8e13-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
            alt=""
          />
        </div>

        {/* 3 */}
        <div className="bg-[#dee0e4] px-4 py-8">
          <div className="">
            <h1 className="flex lg:justify-start  justify-center items-center gap-1 font-bold text-xl pb-2 lg:text-end">
              <HiViewGrid className="" /> Adoption Application Management
            </h1>
            <p className="text-gray-600 pl-6  lg:text-start text-center">
            Enable users to submit adoption applications online, track their status, and communicate with shelters/rescue organizations throughout the process.
            </p>
          </div>

          {/* 2 */}
          <div className="mt-5">
            <h1 className="flex lg:justify-start justify-center items-center gap-1 font-bold text-xl pb-2 lg:text-start">
            <HiViewGrid className="mt-" /> 
            Volunteer Management
            </h1>
            <p className="text-gray-600 pl-6  lg:text-start text-center">
            Offer features for managing volunteer applications, schedules, tasks, and communication to help recruit and coordinate volunteers for various roles within the organization.
            </p>
          </div>
          {/* 3 */}
          <div className="mt-5">
            <h1 className="flex lg:justify-start justify-center items-center gap-1 font-bold text-xl pb-2 lg:text-start">
            <HiViewGrid className="mt-" /> 
            Accessibility Features 
            </h1>
            <p className="text-gray-600 pl-6  lg:text-start text-center">
            Ensure the platform is accessible to users with disabilities by incorporating features such as screen reader compatibility, keyboard navigation, and alternative text for images.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsFeatures;
