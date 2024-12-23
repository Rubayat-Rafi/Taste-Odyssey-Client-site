import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";


const Navbar = () => {
  const { user, handleLogOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  //logout user
  const handleLogout = async () => {
    try {
      await handleLogOutUser();
      alert("Logout Successfully");
    } catch (error) {
      console.log(error.message);
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
            <NavLink to="/login" className={({isActive}) => `w-full inline-block text-center transition-all duration-300 ease-in-out ${isActive ? 'underline text-white bg-orange-500 py-2 px-4 rounded-md font-medium ' : 'text-white bg-orange-500 py-2 px-4 rounded-md font-medium'}`}>
              SignIn
            </NavLink>
          </li>
        )}

    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container md:px-4 mx-auto relative">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          {/* <img className='w-auto' src="../assets/logo.png" /> */}
          <span className="font-bold font-Montserrat lg:text-2xl">
            Taste Odyssey
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className=" hidden md:flex items-center  flex-menu px-1">{links}</ul>

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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/add-job" className="justify-between">
                  My Foods
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-posted-jobs">Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/my-bids">My Orders</NavLink>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        <div className="md:hidden">
          <button 
          onClick={() => setOpen(!open)}
          className="ml-1 flex items-center justify-center dropdown dropdown-end text-2xl rounded-md transition-all duration-300">
            {open ? <MdRestaurantMenu /> : <GiHamburgerMenu />  }
          </button>

        </div>
      </div>
          {open && (
            <ul className="absolute top-16 w-40 right-5 mt-2 p-2 flex-col items-start bg-base-100 shadow-md rounded-md text-sm  kitchen-menu z-50">
              {links}
            </ul>
          )}
    </div>
  );
};

export default Navbar;
