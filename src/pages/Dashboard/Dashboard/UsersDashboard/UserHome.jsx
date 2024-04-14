/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

import { FaCartPlus } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'allPets',
    uv: 22,
    pv: 1 
  },  
  {
    name: 'Donations',
    uv: 20,
    pv: 2   
  }, 
  
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const UserHome = () => {
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("https://pet-adoptions-server.vercel.app/user-stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  // console.log(stats);
  return (
    <div>
      <div className="my-4 md:text-4xl font-semibold text-slate-600">
        <span className="my-4 text-gray-500">Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </div>

      <div className="stats md:mt-16 grid md:grid-cols-1 grid-cols-1 gap-8 justify-between items-center">

        <div className="stat place-items-center bg-indigo-300 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">My pets Adoption...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-3">
            <FaCartPlus className="text-2xl " /> {stats.cart}
          </div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-orange-200 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">My pets Donation...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-4">
            <BiSolidDonateHeart className="text-2xl" /> {stats.myDonation}
          </div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>


        {/* chat */}
        <div className="mt-20 mb-4 flex justify-center items-center">
      <BarChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
      </div>
    </div>
  );
};

export default UserHome;
