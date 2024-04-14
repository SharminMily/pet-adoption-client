const PetsHeathCheck = () => {
  return (
    <div className="my-20 mx-4">
      <h1 className="text-center font-semibold text-4xl pb-2">
        Pets <span className=" font-bold">Heath</span> Check
      </h1>
      <p className="text-center pb- text-gray-700">
        Regular health checks are essential for ensuring the well-being of pets.
        During these examinations, <br />
        veterinarians assess vital signs, including temperature, heart rate, and
        respiratory rate.{" "}
      </p>
      <p className="text-center pb-8 text-gray-700">
        They inspect the eyes, ears, mouth, and skin for any abnormalities.{" "}
        <br /> Additionally, they palpate the abdomen to check for any lumps or
        discomfort.{" "}
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full shadow-lg shadow-slate-700 p-1 bg-[#7c869e]"
        >
          <img
            className="w-full h-full"
            src="https://i.ibb.co/4KfYPbM/premium-photo-1661961347317-41f7a010a441-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full shadow-lg shadow-slate-700 p-1 bg-[#7c869e]"
        >
          <img
            className="w-full h-full"
            src="https://i.ibb.co/TWKXQ5N/premium-photo-1661962453590-5653f2283a5f-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full shadow-lg shadow-slate-700 p-1 bg-[#7c869e]"
        >
          <img
            className="w-full h-full"
            src="https://i.ibb.co/LpwcRd2/premium-photo-1663040486740-60e41b8fd1e3-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
            alt=""
          />
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full shadow-lg shadow-slate-700 p-1 bg-[#7c869e]"
        >
          <img
            className="w-full h-full"
            src="https://i.ibb.co/zxRKJBx/premium-photo-1677165327781-1c0b7c458821-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
            alt=""
          />
          {/* <img
            className="w-full h-full"
            src="https://i.ibb.co/D810Rrs/photo-1596272875729-ed2ff7d6d9c5-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
            alt=""
          /> */}
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full shadow-lg shadow-slate-700 p-1 bg-[#7c869e]"
        >
          <img
            className="w-full h-full"
            src="https://i.ibb.co/LY20vsf/premium-photo-1664300927900-83a4b6209a9b-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
            alt=""
          />
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full shadow-lg shadow-slate-700 p-1 bg-[#7c869e]"
        >
          <img
            className="w-full h-full"
            src="https://i.ibb.co/n3yY9K6/premium-photo-1661916447474-235409b19e16-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
            alt=""
          />
        </div>
      </div>
      {/* 2 */}
    </div>
  );
};

export default PetsHeathCheck;
