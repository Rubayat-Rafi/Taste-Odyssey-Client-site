import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const FoodPurchasePage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();

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


  const handlePurchase = (e) => {
    e.preventDefault();

    const form = e.target;
    const buyer_name = user?.displayName;
    const buyer_email = user?.email;
    const food_name = food?.food_name;
    const food_price = food?.food_price;
    const quantity = form.quantity.value;
    const date = currentDate;

    if(quantity > food?.quantity) return alert("Not enough food available");
    if(quantity <= 0) return alert("Invalid quantity");

    const orderData = { id ,buyer_email, buyer_name, food_name, food_price, quantity, date};
    console.log(orderData);
    
    try{
      axios.post(`${import.meta.env.VITE_API_URL}/purchase`, orderData);
      alert("Order placed successfully Thank You!");
      form.reset();
      navigate("/my-orders");
    }
    catch(error){
      console.log(error);
    }



  };

  return (
    <section className="container px-6 py-10 mx-auto min-h-[calc(100vh-338px)] flex  justify-center items-center">
      <form
        onSubmit={handlePurchase}
        className=" max-w-2xl w-full p-4 bg-white rounded-md shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">Purchase Your Food</h2>
        <div className="flex flex-col gap-y-4">
          {/* 1 row  */}
          <div className="flex flex-col md:flex-row gap-x-4 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md p-2"
                value={user?.displayName}
                disabled
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-md p-2"
                value={user?.email}
                disabled
              />
            </div>
          </div>
          {/* row 2  */}
          <div className="flex flex-col md:flex-row gap-x-4 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name">Food Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md p-2"
                value={food?.food_name}
                disabled
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="name">Food Price</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md p-2"
                value={food?.food_price}
                disabled
              />
            </div>
          </div>
          {/* row 3  */}
          <div className="flex flex-col md:flex-row gap-x-4 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="border border-gray-300 rounded-md p-2"
                placeholder="Quantity"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="date">Date</label>
              {/* Non-editable field displaying the current date */}
              <div className="border border-gray-300 rounded-md p-2 bg-gray-100 text-gray-700">
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
