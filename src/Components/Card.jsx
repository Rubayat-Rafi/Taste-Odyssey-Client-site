import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({food}) => {

  const {_id,
     food_name,
    food_image,
    quantity,
    food_price,
    description,
    preparation_time,} = food || {};
    
  return (
      <div className=" hover:bg-base-200 flex flex-col gap-4 p-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        {/* image  */}
        <div className=" overflow-hidden h-[120px] md:h-[200px] lg:h-[250px] w-full">
        <img src={food_image} alt="random"  className="rounded-lg h-full w-full bg-center bg-cover object-cover"  />
        </div>
        {/* details  */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ">
            <h1 className="text-base md:text-lg font-semibold text-black">{food_name}</h1>
            <p className="text-orange-500 text-xs rounded-sm  font-medium"> Tk: {food_price} </p>
          </div>
          <div className="flex justify-between items-center">
            <p className=" text-xs md:text-sm text-black/60">{description?.substring(0, 20)}...</p>
            <p className=" text-xs md:text-sm text-black/60">Qn: {quantity}</p>
          </div>
          <div className="flex justify-between items-center">
           <Link to={`/food-details/${_id}`}>
           <button 
            className="bg-orange-500 text-white md:text-sm py-1 px-3 md:px-6 rounded-sm text-xs font-medium" > View Details </button>
            </Link>
            <p className="text-sm text-black/60 ">{preparation_time} min</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
