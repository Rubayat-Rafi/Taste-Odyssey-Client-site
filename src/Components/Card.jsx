import { Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { PiBowlFood } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";


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
      <div className=" hover:bg-base-200 dark:bg-neutral-800 flex flex-col gap-4 p-2 md:p-4 unded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out rounded-md shadow-sm">
        {/* image  */}
        <div className=" overflow-hidden h-[120px] md:h-[200px] lg:h-[250px] w-full">
        <img src={food_image} alt="random"  className="rounded-lg h-full w-full bg-center bg-cover object-cover"  />
        </div>
        {/* details  */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ">
            <h1 className="text-sm md:text-lg font-semibold text-black dark:text-white">{food_name}</h1>
            <p className="text-orange-500 text-xs md:text-sm  font-medium  flex items-center"> {food_price} <TbCurrencyTaka className="text-sm md:text-base" /></p>
          </div>
          <div className="flex justify-between items-center gap-1 md:gap-3">
            <p className=" text-xs md:text-sm text-black/60 dark:text-white/60">{description?.substring(0, 20)}...</p>
            <p className=" text-xs md:text-sm text-black/60 dark:text-white/60  flex items-center gap-1">{quantity} <PiBowlFood className="text-sm md:text-base" /> </p>
          </div>
          <div className="  flex items-center justify-between gap-3 mad:gap-6">
           <Link to={`/food-details/${_id}`} className="w-full">
           <button 
            className="bg-orange-500 w-full text-white md:text-base py-1  rounded-sm text-[10px] font-medium" > View Details </button>
            </Link>
            <p className="text-xs md:text-sm text-black/60 dark:text-white/60  flex items-center gap-1">{preparation_time} <IoIosTimer className="text-sm md:text-base" /> </p>
          </div>
        </div>
      </div>
  );
};

export default Card;
