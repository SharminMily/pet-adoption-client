/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { GiCat } from "react-icons/gi";
import { FaDonate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";

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
  {
    name: 'users"',
    uv: 6,
    pv: 3    
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

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  //     const {data: stats} = useQuery({
  //         queryKey: ['admin-stats'],
  //         queryFn: async() => {
  //             const res = await axiosSecure.get('/admin-stats');
  //             return res.data;
  //         }
  //     })
  // console.log(stats)

  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("https://pet-adoptions-server.vercel.app/admin-stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  console.log(stats);

  // castum shape barchat


  return (
    <div>
      <div className="my-4 text-3xl font-semibold text-slate-600">
        <span className="my-4 text-gray-500">Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </div>

      <div className="stats grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center">
        <div className="stat place-items-center bg-indigo-300 rounded-lg p-4 shadow-lg shadow-slate-400">
          <div className="stat-title">Adopt</div>
          <div className="stat-value font-bold text-3xl flex items-center gap-1">
            <GiCat className="text-2xl" /> {stats.allPets}
          </div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-cyan-200 rounded-lg p-4 shadow-lg shadow-slate-400">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary font-bold text-3xl flex items-center gap-1">
            <HiUserGroup className="text-2xl" /> {stats.users}
          </div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center bg-orange-200 rounded-lg p-4 shadow-lg shadow-slate-400">
          <div className="stat-title">Donations</div>
          <div className="stat-value font-bold text-3xl flex items-center gap-1">
            <FaDonate className="text-2xl" /> {stats.donations}
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

export default AdminHome;
