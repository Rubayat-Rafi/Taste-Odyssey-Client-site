import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const FoodPurchasePage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();

  //take todays date and time 
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleString()); 
  }, []);

  useEffect(() => {
    const AllFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/food/${id}`
      );
      setFood(data);
    };
    AllFoods();
  }, [id]);




  const handlePurchase = async(e) => {
    e.preventDefault();

    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const food_name = food?.food_name;
    const food_price = food?.food_price;
    const quantity = parseFloat(form.quantity.value);
    const date = currentDate;
    const food_id = food?._id;
    const purchases = food?.purchases
    const owner = food?.buyer;
    const image = food?.food_image;


    if(quantity > food?.quantity) return toast.error("Not enough food available");
    if(quantity <= 0) return toast.error("Invalid quantity");
    if(email === owner?.email) return toast.error("You can't order your own food");

    const orderData = { food_id ,email, name, food_name, food_price, quantity, date, purchases, owner, image };
    try{
      await axios.post(`${import.meta.env.VITE_API_URL}/purchase`, orderData);
      form.reset();
      toast.success("Order placed successfully Thank You!");
      navigate("/my-orders");
    }
    catch(error){
      toast.error("Failed to place order", error.message);
    }



  };

  return (
    <section className="container px-6 py-10 mx-auto min-h-[calc(100vh-338px)] flex  justify-center items-center">
      <form
        onSubmit={handlePurchase}
        className=" max-w-2xl w-full p-4 bg-white dark:bg-white/20 rounded-md shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Purchase Your Food</h2>
        <div className="flex flex-col gap-y-4">
          {/* 1 row  */}
          <div className="flex flex-col md:flex-row gap-x-4 justify-between ">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name" className="dark:text-white" >Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md p-2 dark:placeholder:text-white/70 dark:border-white/20  dark:bg-white/20 dark:text-white/70"
                value={user?.displayName}
                disabled
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="email" className="dark:text-white">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-md p-2 dark:placeholder:text-white/70 dark:border-white/20  dark:bg-white/20 dark:text-white/70"
                value={user?.email}
                disabled
              />
            </div>
          </div>
          {/* row 2  */}
          <div className="flex flex-col md:flex-row gap-x-4 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name" className="dark:text-white">Food Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md p-2 dark:placeholder:text-white/70 dark:border-white/20  dark:bg-white/20 dark:text-white/70"
                value={food?.food_name}
                disabled
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name" className="dark:text-white">Food Price</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md p-2 dark:placeholder:text-white/70 dark:border-white/20  dark:bg-white/20 dark:text-white/70"
                value={food?.food_price}
                disabled
              />
            </div>
          </div>
          {/* row 3  */}
          <div className="flex flex-col md:flex-row gap-x-4 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="quantity" className="dark:text-white">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="border border-gray-300 rounded-md p-2 dark:placeholder:text-white/70 dark:border-white/20  dark:bg-white/20 dark:text-white/70"
                placeholder="Quantity"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="date" className="dark:text-white " >Date</label>

              <div name="date" className="border border-gray-300 dark:border-white/20 rounded-md p-2 bg-gray-100 dark:bg-white/20 text-gray-700 dark:text-white/70">
                {currentDate}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition-all duration-300  text-white md:text-sm py-2 px-3 md:px-6 rounded-sm text-xs font-medium"
          >
            Order Now
          </button>
        </div>
      </form>
    </section>
  );
};

export default FoodPurchasePage;
