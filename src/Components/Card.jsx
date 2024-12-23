import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
      <div className=" hover:bg-base-200 flex flex-col gap-4 p-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        {/* image  */}
        <div className=" overflow-hidden h-[120px] md:h-[200px] lg:h-[250px] w-full">
        <img src="https://oryoki.de/media/image/news/55/md/miso-ramen,-japanisches-rezept.webp" alt="random"  className="rounded-lg h-full w-full bg-center bg-cover"  />
        </div>
        {/* details  */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ">
            <h1 className="text-base md:text-lg font-semibold text-black">Japanis Ramen</h1>
            <p className="text-orange-500 text-xs rounded-sm  font-medium flex items-center gap-1">4.4 <FaStar/></p>
          </div>
          <div className="flex justify-between items-center">
            <p className=" text-xs md:text-sm text-black/60">I&apos;st test very good.</p>
            <p className=" text-xs md:text-sm text-black/60">390 TK.</p>
          </div>
          <div className="flex justify-between items-center">
           <Link to={`/food-details`}>
           <button 
            className="bg-orange-500 text-white md:text-sm py-1 px-3 md:px-6 rounded-sm text-xs font-medium" > View Details </button>
            </Link>
            <p className="text-sm text-black/60 ">25 min</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
