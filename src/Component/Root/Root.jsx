import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h3 className="text-lg font-extrabold">root</h3>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;