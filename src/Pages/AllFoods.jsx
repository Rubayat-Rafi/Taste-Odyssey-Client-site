import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Card from "../Components/Card";

const AllFoods = () => {

    const [foods, setFoods]= useState([]);

    useEffect(() => {
        const AllFoods = async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-foods`);
            setFoods(data);
        }
        AllFoods();
    }, []);

    console.log(foods);




    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-338px)] flex flex-col justify-between'>
        <div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
            <div>
              <select
                name='category'
                id='category'
                className='border p-3 rounded-lg'
                // onChange={e => setFilter(e.target.value)}
                // value={filter}
              >
                <option value=''>Filter By Category</option>
                <option value="Japanese Cuisine">Japanese Cuisine</option>
                <option value="Chinese Cuisine">Chinese Cuisine</option>
                <option value="Deshi Cuisine">Deshi Cuisine</option>
                <option value="Thai Cuisine">Thai Cuisine</option>
                <option value="Korean Cuisine">Korean Cuisine</option>
                <option value="American Cuisine">American Cuisine</option>
              </select>
            </div>
  
            <div className='flex  overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-orange-400 focus-within:ring-orange-300'>
              <input
                className='px-6 py-[10px] text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                // onChange={e => setSearch(e.target.value)}
                // value={search}
                placeholder='Search Your Food'
                aria-label='Search Your Food'
              />
              <button className='text-xl text-orange-500 p-2 bg-white rounded-r-lg'>
                <IoSearch/>
              </button>
            </div>
  
            <div>
              <select
                name='category'
                id='category'
                // onChange={e => setSort(e.target.value)}
                className='border p-3 rounded-md'
                // value={sort}
              >
                <option value=''>Sort By Price</option>
                <option value='dsc'>Descending Order</option>
                <option value='asc'>Ascending Order</option>
              </select>
            </div>
            <button className='bg-orange-500 text-white px-3 py-[10px] rounded-lg hover:bg-orange-600'>
              Reset
            </button>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                foods.map(food => <Card food={food} key={food._id}/>)
            }
          </div>
        </div>
      </div>
    );
};

export default AllFoods;