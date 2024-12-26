import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyOrderTableRow from '../Components/MyOrderTableRow';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hook/useAxiosSecure';

const MyOrder = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([]);
    const axiosSecure = useAxiosSecure();
  
    useEffect(() => {
      AllFoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setOrders, user]);

    const AllFoods = async () => {
      const { data } = await axiosSecure.get(
        `/my-orders/${user?.email}`)
        setOrders(data);
    };

  

     // delete functionality for posted food
  const handleDelete = async (id) => {
    try {
    await axiosSecure.delete(`/delete-order/${id}`);
      toast.success("Data Deleted Successfully!!!");
      AllFoods();
    } catch (err) {

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
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">My Ordered Foods</h2>
  
          <span className="px-3 py-1 text-xs text-orange-600 bg-orange-100 rounded-full">
            {orders.length} Post
          </span>
        </div>
  
        {orders.length === 0 ? (
         <p className="text-center mt-6 font-medium">No Food Ordered Yet</p>
        ) : (
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg dark:bg-white/20 dark:text-white/70 dark:border-white/60">
                  <table className="table ">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className='dark:text-white'>Image</th>
                        <th className='dark:text-white'>Name</th>
                        <th className='dark:text-white'>Price</th>
                        <th className='dark:text-white'>Owner</th>
                        <th className='dark:text-white'>Date</th>
                        <th className='dark:text-white'>quantity</th>
                        <th className='dark:text-white'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {orders.map((order) => (
                        <MyOrderTableRow modernDelete={modernDelete} order={order} key={order._id} />
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

export default MyOrder;