import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

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
              ? "text-white font-semibold text-base hover:text-gray-200 border-b-2"
              : "text-white font-semibold text-base hover:text-gray-200"
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
              ? "text-white font-semibold text-base hover:text-gray-200 border-b-2"
              : "text-white font-semibold text-base hover:text-gray-200"
          }
        >
          All Pets
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold text-base hover:text-gray-200 border-b-2"
              : "text-white font-semibold text-base hover:text-gray-200"
          }
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className="text-white font-semibold text-lg hover:text-gray-200"
        >
          about
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <Navbar className="bg-fuchsia-900" fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="https://i.ibb.co/p4z17sD/photo-1561948955-570b270e7c36-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
            alt="photo-1561948955-570b270e7c36-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0"
            className="mr-3 w-10 h-10 rounded-full sm:h-9"
          />
          <span className="self-center whitespace-nowrap text-lg text-white font-bold">
            PET ADOPTION
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          {/* <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown> */}

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
                  <span className="block text-sm text-fuchsia-700 font-bold">
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
                className="text-gray-100 font-semibold bg- ml-6 mb- p-3 text-lg flex justify-center items-center"
                href=""
              >
                <Link to="/signUp">SignUp</Link>
              </Navbar>
            </>
          )}

          <Navbar.Toggle className="text-white ml-6 hover:bg-fuchsia-700 hover:text-sm" />
        </div>
        <Navbar.Collapse className="">{navOptions}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
