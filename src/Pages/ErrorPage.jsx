import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); 
    };
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center flex flex-col items-center justify-center">
        <div className="text-orange-500 text-6xl mb-4">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
        <p className="text-lg text-gray-600 mb-4">
          Something went wrong or the page you’re looking for doesn’t exist.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleGoBack}
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900"
          >
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
