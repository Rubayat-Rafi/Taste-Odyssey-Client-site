import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyFoodTableRow from "../Components/MyFoodTableRow";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const AllFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-foods/${user?.email}`
      );
      setFoods(data);
    };
    AllFoods();
  }, [user]);

  console.log(foods);

  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Posted Foods</h2>

        <span className="px-3 py-1 text-xs text-orange-600 bg-orange-100 rounded-full ">
          {foods.length} Post
        </span>
      </div>

      {foods.length === 0 ? (
       <p className="text-center mt-6 font-medium">No Food Posted Yet</p>
      ) : (
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="table ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>category</th>
                      <th>Email</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {foods.map((food) => (
                      <MyFoodTableRow food={food} key={food._id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyFoods;
