import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddPet from "../pages/AddPet/AddPet";
import SignIn from "../pages/From/SignIn/SignIn";
import SignUp from "../pages/From/SignUp/SignUp";
import AllPets from "../pages/AllPets/AllPets";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
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
]);

export default router;
