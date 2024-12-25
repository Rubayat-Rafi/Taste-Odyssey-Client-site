import { MdDeleteForever } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const MyOrderTableRow = ({ order, modernDelete }) => {
  const { _id, food_name, food_price, quantity, date, owner, image } =
    order || {};

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={food_name} />
            </div>
          </div>
        </div>
      </td>

      <td>{food_name}</td>
      <td>{food_price} Taka</td>
      <td>
        <span className="badge badge-ghost badge-sm">{owner?.email}</span>
      </td>

      <td>{date}</td>

      <td>{quantity}</td>

      <td>
        <button onClick={() => modernDelete(_id)} className="text-red-500 text-xl hover:scale-[1.2]">
        <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
};

export default MyOrderTableRow;
