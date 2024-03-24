import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllPetsCard from "../../AllPets/AllPetsCard";

const ListPets = () => {

    const [pets, setPets] = useState([]);
    useEffect(() => {
      fetch("https://pet-adoptions-server.vercel.app/allPets")
        .then((res) => res.json())
        .then((data) => setPets(data));
    }, []);
  
    // console.log(pets);

    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-16">
        <span className="text-">Pets</span> List Here
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-2 gap-4 my-8 md:p-2 p-4 mb-0 mx-0">
        {pets.slice(0, 4).map((pet) => (
          <AllPetsCard
            key={pet.id}
            pet={pet}
          ></AllPetsCard>
        ))}
      </div>
      <Link
        to="/allPets"
        className="flex justify-end items-end no-underline mx-10"
      >
        <button className="self-center md:px-8 px-4 md:py-3 py-2 font-semibold rounded bg-slate-700 text-white">
          See All
        </button>
      </Link>
        </div>
    );
};

export default ListPets;