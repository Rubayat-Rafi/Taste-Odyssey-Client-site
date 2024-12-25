import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const FoodPurchasePage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  console.log(id);

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

  return (
    <section className="container px-6 py-10 mx-auto min-h-[calc(100vh-338px)] flex  justify-center items-center">

        



    </section>
  );
};

export default FoodPurchasePage;
