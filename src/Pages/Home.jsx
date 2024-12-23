import Banner from "../Components/Banner";
import BestSelling from "../Components/BestSelling";
import Card from "../Components/Card";


const Home = () => {
    return (
        <div>
            <Banner/>
            <BestSelling/>
           <div className="max-w-[1280px] mx-auto w-[95%] md:w-11/12">
           <div className="grid grid-cols-2 md:grid-cols-3  gap-3 md:gap-4  mb-20 mt-6">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            </div>
           </div>
        </div>
    );
};

export default Home;