import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddPet from "../pages/AddPet/AddPet";
import SignIn from "../pages/From/SignIn/SignIn";
import SignUp from "../pages/From/SignUp/SignUp";
import AllPets from "../pages/AllPets/AllPets";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import Pets from "../pages/Home/Home/Pets/Pets";
import AllDonations from "../pages/Dashboard/Dashboard/AdminDashboard/AllDonations";
import AllUsers from "../pages/Dashboard/Dashboard/AdminDashboard/AllUsers";
import ManageAllPets from "../pages/Dashboard/Dashboard/AdminDashboard/ManageAllPets";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/Donation/DonationDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addPet",
        element: <AddPet></AddPet>,
      },
      {
        path: "/allPets",
        element: <AllPets></AllPets>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/donations/${params.id}`)
      },
      
     
      
    ],
    
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },


  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageAllPets",
        element: <ManageAllPets></ManageAllPets>
      },
      {
        path: "allDonations",
        element: <AllDonations></AllDonations>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);

export default router;
