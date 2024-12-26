import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyFoodTableRow from "../Components/MyFoodTableRow";
import toast from "react-hot-toast";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    AllFoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const AllFoods = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-foods/${user?.email}`
    );
    setFoods(data);
  };

  // delete functionality for posted food
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`);
      console.log(data);
      toast.success("Data Deleted Successfully!!!");
      AllFoods();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const modernDelete = (id) => {

    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
        You Want To <b>Delete?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <section className="container px-4 mx-auto pt-12 mb-10">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">My Posted Foods</h2>

        <span className="px-3 py-1 text-xs text-orange-600 bg-orange-100 rounded-full ">
          {foods.length} Post
        </span>
      </div>

      {foods.length === 0 ? (
        <p className="text-center mt-6 font-medium dark:text-white">No Food Posted Yet</p>
      ) : (
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 dar">
              <div className="overflow-hidden border border-gray-200 dark:border-white/60 md:rounded-lg dark:placeholder:text-white/70  dark:bg-white/20 dark:text-white/70">
                <table className="table dark:text-white/60">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="dark:text-white">Image</th>
                      <th className="dark:text-white">Name</th>
                      <th className="dark:text-white">category</th>
                      <th className="dark:text-white">Email</th>
                      <th className="dark:text-white">Price</th>
                      <th className="dark:text-white">Description</th>
                      <th className="dark:text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {foods.map((food) => (
                      <MyFoodTableRow
                        food={food}
                        key={food._id}
                        modernDelete={modernDelete}
                      />
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
