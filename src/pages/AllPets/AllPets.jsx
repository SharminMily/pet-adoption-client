/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import AllPetsCard from "./AllPetsCard";
import AuthContext from "../../providers/AuthProvider";
import axios from "axios";
const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [noDataFound, setNoDataFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchData = async () => {
      setLoading(true);
      fetch(`https://pet-adoptions-server.vercel.app/allPets?search=${search}`)
        .then((res) => {
          if (!res) {
            //
            setNoDataFound();
          }
          return res.json();
        })
        .then((result) => {
          setPets(result);
        });
    };
    if (search !== "") {
      searchData();
      setNoDataFound();
    } else {
      //
      fetch("https://pet-adoptions-server.vercel.app/allPets")
        .then((res) => res.json())
        .then((data) => setPets(data));
    }
  }, [search]);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   // setLoading(true);
  //   axios
  //     .get(`https://pet-adoptions-server.vercel.app/allPets?search=${search}`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setPets(res.data);
  //       // setLoading(false);

  //       setNoDataFound(res.data.length === 0);
  //     });
  // };

  // const handleChange = (e) => {
  //   const newValue = e.target.value;
  //   setSearch(e);
  //   // console.log(e.target.value)
  //   if (newValue === "") {
  //     axios
  //       .get(`https://pet-adoptions-server.vercel.app/allPets`, {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         setPets(res.data);

  //         // setLoading(false);
  //         setNoDataFound(res.data.length === 0);
  //       });
  //   } else {
  //     axios
  //       .get(
  //         `https://pet-adoptions-server.vercel.app/allPets?search=${newValue}`,
  //         { withCredentials: true }
  //       )
  //       .then((res) => {
  //         setPets(res.data);
  //         // setLoading(false);
  //         setNoDataFound(res.data.length === 0);
  //       });
  //   }

  // }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <from
          value={setSearch}
          onChange={handleInputChange}
          className="flex items-center my-6 mb-16"
        >
          <input
            type="text"
            className=" rounded-l-lg"
            placeholder="Search…"
          ></input>
          <button
            size="sm"
            type="Submit"
            className={` right-1 top-1 rounded-r p-2.5 bg-slate-300   ${
              search === ""
                ? "bg-slate-300 hover:bg-slate-400"
                : " bg-slate-400"
            }`}
          >
            Search
          </button>
        </from>
      </div>

      {/* <h1 className="text-3xl text-fuchsia-900 font-semibold text-center m-10">All Pets Here</h1> */}

      {noDataFound ? (
        <div className="text-center text-xl my-10 text-red-500">
          Sorry! No pets found.
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6">
          {pets.map((pet) => (
            <AllPetsCard key={pet._id} pet={pet}></AllPetsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPets;
