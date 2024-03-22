/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import useCart from "../hooks/useCart";

import { IoHome } from "react-icons/io5";
import { GiCat } from "react-icons/gi";
import { FaDonate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { MdAddHomeWork } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { FaBookOpenReader } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";
import { FaCartPlus } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import { AiFillFolderAdd } from "react-icons/ai";

const Dashboard = () => {
  const [cart] = useCart();

  //
  const [isAdmin] = useAdmin();

  return (
    <div className="flex bg-gray-100">
      <div className="w-64 min-h-screen bg-[#DCE0EB] px-2">
        {isAdmin ? (
          <>
            <ul className="menu gap-2 py-6 px-2 text-base">
              <li className="flex items-center gap-2 pb-6">
                <IoHome />
                <NavLink to="/dashboard">Admin Home</NavLink>
              </li>
              <li className="flex items-center gap-2 pb-6">
                <GiCat />
                <NavLink to="/dashboard/manageAllPets">All Pets</NavLink>
              </li>
              <li className="flex items-center gap-2 pb-6">
                <FaDonate />
                <NavLink to="/dashboard/allDonations">All Donations</NavLink>
              </li>
              <li className="flex items-center gap-2 pb-6">
              <GiCat />
                <NavLink to="/dashboard/addPets">Add Pets</NavLink>
              </li>
              <li className="flex items-center gap-2 pb-6">
                <HiUserGroup />
                <NavLink to="/dashboard/allUsers">All Users</NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li className="flex items-center gap-2 pb-3 mt-10 p-2">
                <IoHome />
                <NavLink to="/dashboard">User Home</NavLink>
              </li>

              <li className="p-2">
              <NavLink to="/dashboard/addCarts" className="flex items-center gap-10">

             <p className="flex items-center gap-2"> <FaCartPlus /> My Cart</p>
                    <p className="text-lg text-red-50 font-semibold ">
                       +{cart.length}
                    </p>
                  </NavLink>
              </li>

              <li className="p-2">
              <NavLink to="/dashboard/addDonations" className="flex items-center gap-10">

             <p className="flex items-center gap-2">
             <BiSolidDonateHeart />My Donations</p>
                    <p className="text-lg text-red-50 font-semibold ">
                      +
                    </p>
                  </NavLink>
              </li>

              <li className="flex items-center gap-2 pb-2 p-2">
              <AiFillFolderAdd />
                <NavLink to="/dashboard">Add Pet</NavLink>
              </li>

            </ul>
          </>
        )}

        <p className="underline border-b border-gray-500"></p>
        <ul>
          <li className="flex gap-2 items-center mt-4 p-2 py-4">
            <MdAddHomeWork />
            <NavLink to="/" className="">
              Home
            </NavLink>
          </li>
          <li className="flex gap-2 items-center p-2 pb-4">
            <PiSignInBold />
            <NavLink to="signIn" className="">
              sign in
            </NavLink>
          </li>
          <li className="flex gap-2 items-center p-2">
            <FaBookOpenReader />
            <NavLink className="">About Us</NavLink>
          </li>
        </ul>
      </div>

      {/* <div className="bg-fuchsia-600">
        {isAdmin ? (
          <>
            <Sidebar
              aria-label="Sidebar with content separator example"
              className="min-h-screen bg-fuchsia-700"
            >
              <Sidebar.Items className="">
                <Sidebar.ItemGroup>
                  <NavLink to="/dashboard/adminHome" className="">
                    <Sidebar.Item icon={HiChartPie}>Admin Home</Sidebar.Item>
                  </NavLink>

                  <NavLink to="/dashboard/manageAllPets">
                    <Sidebar.Item icon={HiViewBoards}>All pets</Sidebar.Item>
                  </NavLink>

                  <NavLink to="/dashboard/allDonations">
                    <Sidebar.Item href="" icon={HiInbox}>
                      All Donations
                    </Sidebar.Item>
                  </NavLink>

                  <NavLink to="/dashboard/allUsers">
                    <Sidebar.Item href="#" icon={HiUser}>
                      Users
                    </Sidebar.Item>
                  </NavLink>

                  <NavLink>
                    <Sidebar.Item href="" icon={HiShoppingBag}>
                      Add pets
                    </Sidebar.Item>
                  </NavLink>

                  <Sidebar.Item href="" icon={HiArrowSmRight}>
                    Update
                  </Sidebar.Item>
                </Sidebar.ItemGroup>

                <Sidebar.ItemGroup>
                  <NavLink to="/">
                    <Sidebar.Item href="" icon={HiChartPie}>
                      Home
                    </Sidebar.Item>
                  </NavLink>
                  <Sidebar.Item href="" icon={HiViewBoards}>
                    Documentation
                  </Sidebar.Item>
                  <Sidebar.Item href="" icon={BiBuoy}>
                    Help
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </>
        ) : (
          <>
            <Sidebar
              aria-label="Sidebar with content separator example"
              className="min-h-screen bg-fuchsia-700"
            >
              <Sidebar.Items className="">
                <Sidebar.ItemGroup>
                  <NavLink to="/dashboard" className="">
                    <Sidebar.Item icon={HiChartPie}>
                      User Dashboard
                    </Sidebar.Item>
                  </NavLink>

                  <NavLink to="/dashboard/addCarts">
                    <Sidebar.Item href="" icon={HiTable} label={cart.length}>
                      My Cart
                    </Sidebar.Item>
                  </NavLink>

                  <NavLink>
                    <Sidebar.Item href="" icon={HiShoppingBag}>
                      My Donation
                    </Sidebar.Item>
                  </NavLink>

                  <Sidebar.Item href="" icon={HiArrowSmRight}>
                    Sign In
                  </Sidebar.Item>
                </Sidebar.ItemGroup>

                <Sidebar.ItemGroup>
                  <NavLink to="/">
                    <Sidebar.Item href="" icon={HiChartPie}>
                      Home
                    </Sidebar.Item>
                  </NavLink>
                  <Sidebar.Item href="" icon={HiViewBoards}>
                    Documentation
                  </Sidebar.Item>
                  <Sidebar.Item href="" icon={BiBuoy}>
                    Help
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </>
        )}
      </div> */}

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
