import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddPet from "../pages/AddPet/AddPet";
import SignIn from "../pages/From/SignIn/SignIn";
import SignUp from "../pages/From/SignUp/SignUp";
import AllPets from "../pages/AllPets/AllPets";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";

import AllDonations from "../pages/Dashboard/Dashboard/AdminDashboard/AllDonations";
import AllUsers from "../pages/Dashboard/Dashboard/AdminDashboard/AllUsers";
import ManageAllPets from "../pages/Dashboard/Dashboard/AdminDashboard/ManageAllPets";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/Donation/DonationDetails";
import AllPetsDetails from "../pages/AllPets/AllPetsDetails";
import AddCard from "../pages/Dashboard/Dashboard/UsersDashboard/AddCard";
import PrivateRoute from "./PrivateRoute";
import AddPets from "../pages/Dashboard/Dashboard/AdminDashboard/AddPets";
import AdminRoute from "./AdminRoute";
import UpdatePet from "../pages/Dashboard/Dashboard/AdminDashboard/UpdatePet";
import MyDonations from "../pages/Dashboard/Dashboard/UsersDashboard/MyDonations";
import UserHome from "../pages/Dashboard/Dashboard/UsersDashboard/UserHome";
import AdminHome from "../pages/Dashboard/Dashboard/AdminDashboard/AdminHome";
import About from "../pages/About/About";


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
        path: "/allPets/:id",
        element: <PrivateRoute> <AllPetsDetails></AllPetsDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://pet-adoptions-server.vercel.app/allPets/${params.id}`)
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/donation/:id",
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://pet-adoptions-server.vercel.app/donations/${params.id}`)
      },
      {
        path: "/about",
        element: <About></About>,
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "manageAllPets",
        element: <AdminRoute><ManageAllPets></ManageAllPets></AdminRoute>
      },
      {
        path: "allDonations",
        element: <AdminRoute><AllDonations></AllDonations></AdminRoute>
      },
      {
        path: "addPets",
        element: <AdminRoute> <AddPets></AddPets> </AdminRoute>
      },
      {
        path: "updatePet/:id",
        element: <AdminRoute> <UpdatePet></UpdatePet> </AdminRoute>,
        loader: ({params}) => fetch(`https://pet-adoptions-server.vercel.app/allPets/${params.id}`)
      },

      {
        path: "allUsers",
        element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
      },
      {
        path: "addCarts",
        element: <AddCard></AddCard>
      },
      {
        path: "myDonations",
        element: <MyDonations></MyDonations>
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>
      }
    ]
  }
]);

export default router;
