import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MyFoodTableRow = ({food}) => {

    const {
        food_name,
        food_image,
        food_category,
        food_price,
        buyer,
        description,

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

        <td>
          <Link to="/food-details">
            <button className="btn btn-sm">View</button>
          </Link>
          <button className="btn btn-sm">delete</button>
        </td>

      </tr>
    );
};

export default MyFoodTableRow;