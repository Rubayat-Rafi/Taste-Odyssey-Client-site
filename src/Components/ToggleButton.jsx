import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


const ToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handletoggleButton = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
          }
    }

    return (

        <div className="flex items-center justify-center gap-2">
            {/*  icon  */}
            {
                isDarkMode ? <FaMoon onClick={handletoggleButton} className="text-yellow-500 text-xl cursor-pointer"/> : <FaSun onClick={handletoggleButton} className="text-orange-500 text-xl cursor-pointer"/> 
            }
        </div>
    );
};

export default ToggleButton;