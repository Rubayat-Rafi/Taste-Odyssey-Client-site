import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MyFoodTableRow = ({food, modernDelete}) => {

    const {
        food_name,
        food_image,
        food_category,
        food_price,
        buyer,
        description,
        _id

      } = food || {};

    return (
        <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={food_image}
                  alt={food_name}
                />
              </div>
            </div>
          </div>
        </td>

        <td>
          {food_name}
        </td>
        <td>
          {food_category}
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{buyer?.email}</span>
        </td>

        <td>{food_price} Taka</td>

        <td>{description?.substring(0,18)}...</td>

        <td className="space-x-4">
          <Link to={`/update-food/${_id}`}>
            <button className=" text-green-500 text-lg hover:scale-[1.2]">
            <FaEdit />
            </button>
          </Link>
        <button onClick={() => modernDelete(_id)} className="text-red-500 text-xl hover:scale-[1.2]">
        <MdDeleteForever />
        </button>
        </td>

      </tr>
    );
};

export default MyFoodTableRow;