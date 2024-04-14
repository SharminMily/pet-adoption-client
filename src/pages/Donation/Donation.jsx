import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Pagination } from "flowbite-react";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [asc, setAsc] = useState(true);
  const [category, setCategory] = useState('');
  const [donationRang, setDonationRang] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://pet-adoptions-server.vercel.app/donations?sort=${asc ? "asc" : "des"}&category=${category}&donationRang=${donationRang}`)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, [asc, category, donationRang]);

  // console.log(donations)

  const handleDonationSort = (e) => {
    setAsc(e.target.value === "asc");
    console.log();
  };


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const handleDonationRangChange = (e) => {
    setDonationRang(e.target.value);
  };


  // paginations
  const itemsPerPage = 6;   
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(donations.length / itemsPerPage);
  const paginatedData = donations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



  return (
    <div>
      <h1 className="text-3xl text-fuchsia-900 font-semibold text-center mt-5 m-10">
        Donations List
      </h1>
      {/* <div onClick={() => setAsc(!asc)} className="">
            {
              asc ? <button className='bg-pink-500 text-white p-2 rounded-lg'>Price: High to low</button> : 
              <button className='bg-pink-500 text-white p-2 rounded-lg'>Price: Low to high</button>
            }
            </div> */}
      <div className="flex justify-between my-6">
      <from>
          <label className="text-lg font-semibold">Sort by Donation</label>
          <div className="w-40">
            <select
              value={asc ? "asc" : "des"}
              onChange={handleDonationSort}
              className=" rounded-lg block "
            >
              <option value="Select">Select</option>
              <option value="asc">Low to High</option>
              <option value="des">High to low</option>
            </select>
          </div>
        </from>
        {/* category */}
        <from>
          <label className="text-lg font-semibold">Category</label>
          <div className="w-40">
            <select  value={category} 
            onChange={handleCategoryChange}           
              className=" rounded-lg block "
            >
              <option value="">Category</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit"> Rabbit</option>
             
            </select>
          </div>
        </from>


        <from>
        <label className="text-lg font-semibold">Donation Range: <br></br></label>
        <select className="rounded-lg"
          id="donationRang"
          value={donationRang}
          onChange={handleDonationRangChange}
        >
          <option value="">Select Range</option>
          <option value="0-30">$0 - $30</option>
          <option value="31-50">$31 - $50</option>
          <option value="51-1000">$51 - $1000</option>
          {/* Add more options as needed */}
        </select>
      </from>
       
      </div>
        {/* Display paginated data */}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-0">
        {paginatedData.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
      
       {/* Pagination */}
       <div className="flex overflow-x-auto sm:justify-center  mb-16">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          showIcons
        />
      </div>     
    
    </div>
  );
};

export default Donation;
