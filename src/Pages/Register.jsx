import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import animationData from "../assets/lottie/Animation - 1734877842825.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { handleRegisterUser, setUser, handleUpdateprofile, handleGoogleLoginUser } =
    useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  // const [hidepass, setHidePass] = useState(true);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.table({ name, photo, email, password })
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must include an uppercase, a lowercase, and be 6+ characters."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const result = await handleRegisterUser(email, password);
      console.log(result);
      await handleUpdateprofile(name, photo);
      setUser({ ...result.user, displayName: name, photoURL: photo });
    } catch (error) {
      console.log(error.message);
    }
  };


      //google login user
      const handleGoogle = async() => {
        try {
         await handleGoogleLoginUser()
          alert('SignIn Successfully')
          navigate('/')
        } catch (error) {
          console.log(error.message)
      }
    }

  return (
    <div className="flex justify-center items-center mx-auto max-w-[1440px] min-h-[calc(100vh-338px)] w-11/12 my-12">
      <div className="flex items-center justify-center lg:flex-row flex-col gap-6  w-full max-w-sm  overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl p-8">
        <div className="w-full lg:w-1/2">
          <Lottie animationData={animationData}></Lottie>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
            Register
          </h2>
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Photo */}
            <div>
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Photo
              </label>
              <input
                type="url"
                id="photo"
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your photo URL"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2  focus:ring-orange-500"
                placeholder="Enter your password"
                required
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs ">{passwordError}</p>
            )}
            {/* Submit */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Register
            </button>
          </form>
          {/* Footer */}
          <p className="mt-4 text-xs text-center text-gray-600">
            <span>Already have an account? </span>
            <Link
              to="/login"
              className="text-orange-500 hover:underline focus:underline"
            >
              SignIn
            </Link>
          </p>

          <div className="text-center mt-6 w-full">
            <button
            onClick={handleGoogle}
            className="py-2 px-8 bg-orange-500 rounded-full text-white f hover:bg-orange-600 transition-all duration-300">
              <span className="flex items-center justify-center gap-2 mx-auto">
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

export default Register;
