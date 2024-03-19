import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    

    useEffect(() => {
      fetch("http://localhost:5000/donations")
        .then((res) => res.json())
        .then((data) => setDonations(data));
    }, []);
  
    // console.log(donations);
    return (
        <div>
            <h1 className="text-3xl text-fuchsia-900 font-semibold text-center mt-5 m-10">Donations List</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-0">
        {donations.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
        </div>
    );
};

export default Donation;