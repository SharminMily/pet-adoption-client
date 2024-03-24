import { useEffect, useState } from "react";
import MyDonationsCard from "./MyDonationsCard";

const MyDonations = () => {
  const [myDonations, setMyDonations] = useState([]);

  useEffect(() => {
    fetch("https://pet-adoptions-server.vercel.app/myDonations")
      .then((res) => res.json())
      .then((data) => setMyDonations(data));
  }, []);

//   console.log(myDonations);
  return (
    <div>
      <h1 className="text-3xl text-fuchsia-900 font-semibold text-center m-10">
        My Donations
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-">
        {myDonations.map((myDonation) => (
          <MyDonationsCard key={myDonation.id} myDonation={myDonation}></MyDonationsCard>
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
