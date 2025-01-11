// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import banner1 from "../assets/HomeBanner/banner1.jpg";
import banner2 from "../assets/HomeBanner/banner2.jpg";
import banner3 from "../assets/HomeBanner/banner3.jpg";
import banner4 from "../assets/HomeBanner/banner4.jpg";
import banner5 from "../assets/HomeBanner/banner5.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "Savor the Flavors",
      description:
        "Experience the best culinary delights crafted to perfection.",
    },
    {
      id: 2,
      image: banner2,
      title: "Where Every Meal Tells a Story",
      description: "Discover dishes that blend tradition with innovation.",
    },
    {
      id: 3,
      image: banner3,
      title: "Your Culinary Adventure Awaits",
      description: "Embark on a journey of taste, texture, and aroma.",
    },
    {
      id: 4,
      image: banner4,
      title: "Fresh Ingredients, Timeless Recipes",
      description: "Indulge in meals made with passion and fresh ingredients.",
    },
    {
      id: 5,
      image: banner5,
      title: "Welcome to Flavor Paradise",
      description: "Delight in every bite with our chef’s special creations.",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        
      >
        {banners.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative flex flex-col justify-center items-center text-white text-center px-6 transition-transform h-[400px] md:h-[500px] lg:h-[600px]"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
              {/* Content */}
              <div className="relative z-10 mx-auto">
                <h1 className="z-10  text-2xl md:text-4xl font-bold font-Montserrat mb-2 md:mb-4">
                  {slide.title}
                </h1>
                <p className=" text-sm md:text-lg">{slide.description}</p>
                <Link to={`/all-foods`}>
                  <button className="mt-4 md:mt-6 md:px-6 md:py-2 text-sm py-1 px-2 md:text-lg transition-all duration-300 bg-orange-500 font-medium hover:bg-orange-600 rounded-md">
                    View All Foods
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Banner;
