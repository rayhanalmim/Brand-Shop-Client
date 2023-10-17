import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponent/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;