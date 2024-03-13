import { Card } from "flowbite-react";

const PetsHeathCheck = () => {
  return (
    <div className="my-20 mx-4">
      <h1 className="text-center font-semibold text-4xl pb-10">
        Pets <span className="text-fuchsia-800 font-bold">Heath</span> Check
      </h1>

      <div className="grid grid-cols-3 gap-4">
   

        <div className="w-full shadow-lg shadow-slate-700 p-1 bg-fuchsia-800">
            <img className="w-full h-full" src="https://i.ibb.co/4KfYPbM/premium-photo-1661961347317-41f7a010a441-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" />

       
        </div>
        <div className="w-full shadow-lg shadow-slate-700 p-1 bg-fuchsia-800">
            <img className="w-full h-full" src="https://i.ibb.co/TWKXQ5N/premium-photo-1661962453590-5653f2283a5f-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" />

       
        </div>
        <div className="w-full shadow-lg shadow-slate-700 p-1 bg-fuchsia-800">
            <img className="w-full h-full" src="https://i.ibb.co/LpwcRd2/premium-photo-1663040486740-60e41b8fd1e3-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" />

       
        </div>



        {/* <Card className="max-w-sm">
            <img src="https://i.ibb.co/LpwcRd2/premium-photo-1663040486740-60e41b8fd1e3-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" />

          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card> */}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
   

   <div className="w-full shadow-lg shadow-slate-700 p-1 bg-fuchsia-800">
       <img className="w-full h-full" src="https://i.ibb.co/4KfYPbM/premium-photo-1661961347317-41f7a010a441-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" />

  
   </div>
   <div className="w-full shadow-lg shadow-slate-700 p-1 bg-fuchsia-800">
       <img className="w-full h-full" src="https://i.ibb.co/TWKXQ5N/premium-photo-1661962453590-5653f2283a5f-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" />

  
   </div>
   <div className="w-full shadow-lg shadow-slate-700 p-1 bg-fuchsia-800">
       <img className="w-full h-full" src="https://i.ibb.co/LpwcRd2/premium-photo-1663040486740-60e41b8fd1e3-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" />
  
   </div>   
 </div>
    </div>
  );
};

export default PetsHeathCheck;
