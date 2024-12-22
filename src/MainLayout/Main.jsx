
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>

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