import { useEffect, useState } from "react";
import AllPetsCard from "./AllPetsCard";

const AllPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allPets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  console.log(pets);
  return (
    <div>
     <h1 className="text-3xl text-fuchsia-900 font-semibold text-center m-10">All Pets Here</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6">
        {pets.map((pet) => (
          <AllPetsCard key={pet.id} pet={pet}></AllPetsCard>
        ))}
      </div>

    </div>
  );
};

export default AllPets;
