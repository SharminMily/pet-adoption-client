/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const [cart] = useCart();
  //
  const isAdmin = true;

  return (
    <div className="flex bg-gray-100">
      {/* <div className="w-64 min-h-screen text-white bg-fuchsia-700">
                <ul className="menu  gap-2 py-6 px-2 text-base">
                    <li>
                        <NavLink to="/dashboard/manageAllPets">
                            
                            All Pets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allDonations">
                            
                        All Donations</NavLink>
                    </li>
                </ul>
            </div> */}

      <div className="bg-fuchsia-600">
        <Sidebar         
          aria-label="Sidebar with content separator example"  className="min-h-screen bg-fuchsia-700"
        >
          <Sidebar.Items className="">
            <Sidebar.ItemGroup>
              <NavLink to="/dashboard" className="">
                <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
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
                  Update
                </Sidebar.Item>
              </NavLink> 


              <NavLink to="/dashboard/addCarts">
                <Sidebar.Item href="" icon={HiTable} label={cart.length}>
                  Add Cart
                </Sidebar.Item>
              </NavLink>

              <Sidebar.Item href="" icon={HiArrowSmRight} >
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
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
