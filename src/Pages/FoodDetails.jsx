import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();

  const [food, setFood] = useState({});

  useEffect(() => {
    const AllFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/food/${id}`
      );
      setFood(data);
    };
    AllFoods();
  }, [id]);

  console.log(food);
  const {
    food_name,
    food_image,
    food_category,
    food_origin,
    quantity,
    food_price,
    buyer,
    description,
    preparation_time,
    purchases,
  } = food || {};

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-338px)] flex items-center justify-center   ">
      <div className="flex flex-col md:flex-row justify-start items-start md:w-[800px]  gap-6 bg-white p-4 rounded-md shadow-md">
        {/* food image  */}
        <div className=" md:w-1/2 ">
          <img
            className="h-[400px] w-full object-cover rounded-md"
            src={food_image}
            // alt={food_name}
          />
        </div>
        {/* food details  */}
        <div className="space-y-3 md:w-1/2">
          <h1 className="text-2xl font-semibold text-black"> {food_name} </h1>
          <p className="text-black/70">Price: {food_price} Taka.</p>
          <p className="text-black/70">Quantity: {quantity} plate </p>
          <p className="text-black/70">Preparation Time: {preparation_time} min </p>
          <p className="text-black/70">Category: {food_category} </p>
          <p className="text-black/70">Origin: {food_origin}</p>
          <p className="text-black/70">purchases: {purchases}</p>
            <p className="text-black/70">Owner_Email: {buyer?.email}</p>
          <p className="text-black/70">Description: {description}</p>
          <button className="bg-orange-500 text-white md:text-sm py-1 px-3 md:px-6 rounded-sm text-xs font-medium">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
