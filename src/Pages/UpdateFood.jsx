import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [food, setFood] = useState({});

  useEffect(() => {
    allFoodData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const allFoodData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/food/${id}`
      );
      setFood(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(food);

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const food_category = form.food_category.value;
    const food_origin = form.food_origin.value;
    const quantity = parseFloat(form.quantity.value);
    const food_price = parseFloat(form.food_price.value);
    const preparation_time = parseFloat(form.preparation_time.value);
    const email = user?.email;
    const description = form.description.value;

    if (
      food_name === "" ||
      food_image === "" ||
      food_category === "" ||
      food_origin === "" ||
      quantity === "" ||
      food_price === "" ||
      preparation_time === "" ||
      email === "" ||
      description === ""
    ) {
      return toast.error("Please fill all the fields");
    }
    if (quantity <= 0 || food_price <= 0 || preparation_time <= 0) {
      return toast.error("Invalid Quantity, Price or Preparation Time");
    }

    const formData = {
      food_name,
      food_image,
      food_category,
      food_origin,
      quantity,
      food_price,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      description,
      preparation_time,
      purchases: 0,
    };

    console.table(formData);
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-food/${id}`,
        formData
      );
      console.log("update food data----------------->", data);
      toast.success("Food Updated Successfully");
      form.reset();
      navigate("/all-foods");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Update Food");
    }
  };

  return (
    <div className="bg-add-food-bg bg-cover bg-center ">
      <div className="flex justify-center items-center min-h-[calc(100vh-338px)] py-12">
        <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md dark:bg-white/20">
         
          <h2 className="text-lg font-semibold text-gray-700 capitalize  dark:text-white">
            Update Food
          </h2>

          <form onSubmit={handleUpdateFood}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* food_name */}
              <div>
                <label className="text-gray-700  dark:text-white/70" htmlFor="Food Name">
                  Food Name
                </label>
                <input
                  id="food_name"
                  name="food_name"
                  type="text"
                  defaultValue={food?.food_name}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40  focus:outline-none focus:ring dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                />
              </div>
              {/* food image  */}
              <div>
                <label className="text-gray-700  dark:text-white/70" htmlFor="food_image">
                  Food Image URL
                </label>
                <input
                  id="food_image"
                  type="URL"
                  name="food_image"
                  defaultValue={food?.food_image}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40  focus:outline-none focus:ring dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                />
              </div>
              {/* food category */}
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700  dark:text-white/70" htmlFor="food_category">
                  Food Category
                </label>
                <select
                  name="food_category"
                  id="food_category"
                  defaultValue={food?.food_category}
                  className="border p-2 rounded-md dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                >
                  <option className="dark:text-black" value="Japanese Cuisine">Japanese Cuisine</option>
                  <option className="dark:text-black" value="Chinese Cuisine">Chinese Cuisine</option>
                  <option className="dark:text-black" value="Deshi Cuisine">Deshi Cuisine</option>
                  <option className="dark:text-black" value="Thai Cuisine">Thai Cuisine</option>
                  <option className="dark:text-black" value="Korean Cuisine">Korean Cuisine</option>
                  <option className="dark:text-black" value="American Cuisine">American Cuisine</option>
                </select>
              </div>
              {/* food origin */}
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700  dark:text-white/70" htmlFor="food_origin">
                  Food Origin
                </label>
                <select
                  name="food_origin"
                  id="food_origin"
                  defaultValue={food?.food_origin}
                  className="border p-2 rounded-md dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                >
                  <option className="dark:text-black" value="Japanese">Japanese</option>
                  <option className="dark:text-black" value="Chinese">Chinese</option>
                  <option className="dark:text-black" value="Bangladeshi">Bangladeshi</option>
                  <option className="dark:text-black" value="Thai">Thai</option>
                  <option className="dark:text-black" value="Korean">Korean</option>
                  <option className="dark:text-black" value="American">American</option>
                </select>
              </div>
              {/* food quantity */}
              <div>
                <label className="text-gray-700  dark:text-white/70" htmlFor="quantity">
                  Food Quantity
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  defaultValue={food?.quantity}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40  focus:outline-none focus:ring dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                />
              </div>
              {/* food price */}
              <div>
                <label className="text-gray-700  dark:text-white/70" htmlFor="food_price">
                  Food Price
                </label>
                <input
                  id="food_price"
                  name="food_price"
                  type="number"
                  defaultValue={food?.food_price}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40  focus:outline-none focus:ring dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                />
              </div>
              {/* Preparation Time */}
              <div>
                <label className="text-gray-700  dark:text-white/70" htmlFor="preparation_time">
                  Preparation Time
                </label>
                <input
                  id="preparation_time"
                  name="preparation_time"
                  type="number"
                  defaultValue={food?.preparation_time}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40  focus:outline-none focus:ring dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                />
              </div>
              {/* email */}
              <div>
                <label className="text-gray-700  dark:text-white/70" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                />
              </div>
            </div>
            {/* description */}
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700  dark:text-white/70" htmlFor="description">
                A Short Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-orange-400 focus:ring-orange-300 focus:ring-opacity-40  focus:outline-none focus:ring dark:text-white/70 dark:bg-white/20 dark:border-white/20"
                name="description"
                id="description"
                defaultValue={food?.description}
              ></textarea>
            </div>
            {/* Submit  button*/}
            <div className="flex justify-end mt-6">
              <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none resize-none">
                Update Item
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateFood;
