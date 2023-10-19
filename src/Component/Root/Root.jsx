import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponent/Navbar";
import './dark-mode.css'; // Import the dark mode styles
import './light-mode.css';
import { createContext, useState } from "react";

export const DarkContext = createContext(null); 

const Root = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const data = {isDarkMode}

    return (
       <DarkContext.Provider value={data}>
         <div className={`${isDarkMode ? 'dark' : 'light'}`}>
            <Navbar toggleMode={toggleMode}></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
       </DarkContext.Provider>
    );
};

export default Root;