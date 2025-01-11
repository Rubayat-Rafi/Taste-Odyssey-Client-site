import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import animationData from "../assets/lottie/Animation - 1734876103222.json"
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { handleSignInUser, handleGoogleLoginUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //signin user
  const handleSignIn = async(e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.table({email, password})
    try {
     await handleSignInUser(email, password)
     toast.success('SignIn Successfully')
     navigate('/')
    } catch (error) {
      toast.error('Failed to SignIn', error.message)
    }
  }


    //google login user
    const handleGoogle = async() => {
      try {
       await handleGoogleLoginUser()
        toast.success('SignIn Successfully')
        navigate('/')
      } catch (error) {
    
        toast.error('Failed to SignIn', error.message)
    }
  }

  


    return (
        <div className="flex justify-center items-center mx-auto max-w-[1280px] min-h-[calc(100vh-338px)] w-11/12 my-12" >
            <div className="flex items-center justify-center lg:flex-row flex-col gap-6  w-full max-w-sm  overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl p-4 md:p-8 dark:bg-neutral-800">
            <div className="w-full lg:w-1/2">
            <Lottie animationData={animationData} ></Lottie>
            </div>
            <div className="w-full lg:w-1/2">
            <h2 className=" mb-3 text-lg md:mb-6  md:text-xl font-semibold text-center text-gray-700 dark:text-base-200">
          SignIn
        </h2>

        <form onSubmit={handleSignIn} className="space-y-3 md:space-y-6">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 md:mb-2 text-xs md:text-sm font-medium text-gray-600 dark:text-base-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
            //   value={email}

              className="w-full px-2 md:px-4 py-2 text-xs md:text-sm text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 md:mb-2 text-xs md:text-sm font-medium text-gray-600 dark:text-base-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
            //   value={password}              
              className="w-full px-2 md:px-4 py-2 text-xs md:text-sm text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2  focus:ring-orange-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 text-xs md:text-sm lg:text-base text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            SignIn
          </button>
        </form>
        {/* Footer */}
        <p className="mt-4  text-[10px] md:text-xs text-center text-gray-600 dark:text-base-200">
        <span>Don&apos;t have an account? </span>
          <Link
            to="/register"
            className="text-orange-500 hover:underline focus:underline"
          >
            Register
          </Link>
        </p>


        <div className="text-center mt-4 md:mt-6 w-full">
            <button
            onClick={handleGoogle}

            className="md:py-2 md:px-8 py-1 px-3 bg-orange-500 rounded-full text-white f hover:bg-orange-600 transition-all duration-300 text-xs md:text-base lg:text-lg">
             <span  className="flex items-center justify-center gap-1 md:gap-2 mx-auto">  
              <FaGoogle />
             SignIn with Google 
             </span>
             </button>
        </div>
            </div>
            </div>
        </div>
    );
};

export default Login;