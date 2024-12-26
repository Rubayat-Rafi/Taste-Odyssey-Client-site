import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import toast from "react-hot-toast";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const { user, handleLogOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  //logout user
  const handleLogout = async () => {
    try {
      await handleLogOutUser();
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Failed to logout", error.message);
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-foods">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/gallery"> Gallery</NavLink>
      </li>

      {!user && (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `w-full inline-block text-center transition-all duration-300 ease-in-out ${
                isActive
                  ? "underline text-white bg-orange-500 py-2 px-4 rounded-md font-medium "
                  : "text-white bg-orange-500 py-2 px-4 rounded-md font-medium"
              }`
            }
          >
            SignIn
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar shadow-sm  md:px-4 mx-auto relative ">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <span className="font-bold font-Montserrat lg:text-2xl dark:text-white">
            Taste Odyssey 
          </span>
        </Link>
      </div>
      <div className="flex-none space-x-3">
        <ul className=" hidden md:flex items-center dark:text-white flex-menu px-2 mr-3">
          {links}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" w-9 md:w-10 rounded-full">
                <img referrerPolicy="no-referrer" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-black rounded-box w-52 dark:text-white"
            >
              <li>
                <NavLink to="/my-foods">My Foods</NavLink>
              </li>
              <li>
                <NavLink to="/add-food">Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/my-orders">My Orders</NavLink>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 dark:bg-orange-500 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        <div>
          {/* toggle button here */}
          <ToggleButton />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className=" flex items-center justify-center dropdown dropdown-end text-2xl rounded-md transition-all duration-300 dark:text-white"
          >
            {open ? <MdRestaurantMenu /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      {open && (
        <ul className="md:hidden  absolute top-16 w-40 right-5 mt-2 p-2 flex-col  items-start bg-base-100 shadow-md rounded-md text-sm kitchen-menu z-50  dark:bg-black dark:text-white">
          {links}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
