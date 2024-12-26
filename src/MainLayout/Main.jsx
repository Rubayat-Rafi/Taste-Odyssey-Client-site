
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Main = () => {
    return (
        <div className='dark:bg-black'>
            {/* navbar */}
            <div className="sticky top-0 z-50 w-full bg-base-100 dark:bg-black">
            <Navbar/>
            </div>

            {/* home layout  */}
            <div className="min-h-[calc(100vh-338px)]">
                <Outlet/>
            </div>
            
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Main;