import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
        <div className='flex-1'>
          <a to='/' className='flex gap-2 items-center'>
            {/* <img className='w-auto' src="../assets/logo.png" /> */}
            <span className='font-bold font-Montserrat lg:text-2xl'>Taste Odyssey</span>
          </a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/all-foods'>All Foods</NavLink>
            </li>
            <li>
              <a to='/jobs'> Gallery</a>
            </li>
  
            {/* {!user && ( */}
              <li>
                <a to='/login'>Login</a>
              </li>
            {/* )} */}
          </ul>
  
          {/* {user && ( */}
            {/* <div className='dropdown dropdown-end z-50'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    referrerPolicy='no-referrer'
    
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a to='/add-job' className='justify-between'>
                     My Foods
                  </a>
                </li>
                <li>
                  <a to='/my-posted-jobs'>Add Food</a>
                </li>
                <li>
                  <a to='/my-bids'>My Orders</a>
                </li>
                <li className='mt-2'>
                  <button
                    className='bg-gray-200 block text-center'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div> */}
          {/* )} */}
        </div>
      </div>
    );
};

export default Navbar;