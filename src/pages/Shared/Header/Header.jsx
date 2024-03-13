import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navOptions = (
       <>
      <Link>
        
        <NavLink className="text-white font-semibold text-lg hover:text-gray-200">
          Home
        </NavLink>
      </Link>
      <Link>
        <Navbar.Link
          className="text-gray-100 hover:text-gray-200 text-lg"
          href="#"
        >
          All pets
        </Navbar.Link>
      </Link>
      <Link>
        <Navbar.Link
          className="text-gray-100 hover:text-gray-200 text-lg"
          href="#"
        >
          Contact
        </Navbar.Link>
      </Link>
      <Link>
        <Navbar.Link
          className="text-gray-100 hover:text-gray-200 text-lg"
          href="#"
        >
          Contact
        </Navbar.Link>
      </Link>
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
          <Dropdown
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
          </Dropdown>

          <Navbar className="text-gray-100 font-semibold bg- ml-6 mb- p-3 text-lg flex justify-center items-center" href="">
            <Link to="/signUp">SignUp</Link>
          </Navbar>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="">{navOptions}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
