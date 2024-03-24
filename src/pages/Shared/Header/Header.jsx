import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allPets"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          All Pets
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/donation"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
         Donations
        </NavLink>
      </li>

      {/* <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Dashboard
        </NavLink>
      </li> */}

       {
        user && isAdmin && <li>
        <NavLink
          to="/dashboard/adminHome"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Dashboard
        </NavLink>
      </li>
       }

       {
        user && !isAdmin && <li>
        <NavLink
          to="/dashboard/userHome"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Dashboard
        </NavLink>
      </li>
       }



      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
          isActive
            ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
            : " font-semibold text-base hover:text-gray-600"}
        >
          about
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <Navbar className="bg-[#DCE0EB]" fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="https://i.ibb.co/p4z17sD/photo-1561948955-570b270e7c36-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
            alt="photo-1561948955-570b270e7c36-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0"
            className="mr-3 w-10 h-10 rounded-full sm:h-9"
          />
          <span className="self-center whitespace-nowrap text-lg font-bold">
            PET ADOPTION
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
       

          {user?.email ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm text-stone-700 font-bold">
                    {user?.displayName}
                  </span>
                  <span className="block truncate text-sm font-semibold mt-2">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Link
                  onClick={handleLogOut}
                  className="font-semibold text-red-700"
                >
                  <Dropdown.Item className="text-red-500 text-base">
                    logOut
                  </Dropdown.Item>
                </Link>
              </Dropdown>
            </>
          ) : (
            <>
              <Navbar
                className="text-gray-700 font-semibold bg- ml-6 mb- p-3 text-lg flex justify-center items-center"
                href=""
              >
                <Link to="/signIn">SignIn</Link>
              </Navbar>
            </>
          )}

          <Navbar.Toggle className=" ml-6 hover:b hover:text-sm" />
        </div>
        <Navbar.Collapse className="">{navOptions}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
