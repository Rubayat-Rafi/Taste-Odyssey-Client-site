import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import BestSelling from "../Components/BestSelling";
import Card from "../Components/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const AllFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/best-selling`
      );
      setFoods(data);
    };
    AllFoods();
  }, []);

  return (
    <div>
      <Banner />
      <BestSelling />
      <div className="max-w-[1280px] mx-auto w-[95%] md:w-11/12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-3 md:gap-4   mt-6 ">
          {foods.map((food) => (
            <Card food={food} key={food._id} />
          ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <Link to={`/all-foods`}>
              <button className="mt-6  px-6 py-2 transition-all duration-300 text-white bg-orange-500 font-medium hover:bg-orange-600 rounded-md">
                View All Foods
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
