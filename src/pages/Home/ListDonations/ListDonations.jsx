import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllPetsCard from "../../AllPets/AllPetsCard";
import DonationCard from "../../Donation/DonationCard";

const ListDonation = () => {

    const [donations, setDonations] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/donations")
        .then((res) => res.json())
        .then((data) => setDonations(data));
    }, []);
  
    // console.log(pets);

    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-16">
        <span className="text">Donations</span> List Here
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-2 gap-4 my-8 md:p-2 p-4 mb-0 mx-0">
        {donations.slice(0, 4).map((donation) => (
          <DonationCard
            key={donation.id}
            donation={donation}
          ></DonationCard>
        ))}
      </div>
      <Link
        to="/donation"
        className="flex justify-end items-end no-underline mx-10"
      >
        <button className="self-center md:px-8 px-4 md:py-3 py-2 font-semibold rounded bg-slate-700 text-white">
          See All
        </button>
      </Link>
        </div>
    );
};

export default ListDonation;
// export default ListDonations;