import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut, looding } = useContext(AuthContext);

    if (looding) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-md"></span></div>;
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/add'>Add Product</NavLink></li>
        <li><NavLink to='/card'>My Card</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error('log Out successfully', {
                    position: "top-left",
                    theme: "dark",
                });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage);
                toast.error(errorMessage, {
                    position: "top-left",
                    theme: "dark",
                });
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <div className="flex gap-3">
                    <img className="w-40" src="https://i.ibb.co/6rjd1zR/Micron-Technology-logo-svg.png" alt="" />
                    <div className="flex justify-center items-center">
                    <h3 className="font-bold text-3xl hidden md:block">Tech Services</h3>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden md:block">
                    {
                        user && <a className="btn btn-ghost normal-case text-xl">{user.displayName}</a>
                    }
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                    <div className="w-10 rounded-full">
                        {
                            user ? <img src={user.photoURL} alt="" /> : <img src="https://i.ibb.co/v1FKW31/user.png" alt="" />
                        }
                    </div>
                </label>
                {
                    user ? <Link onClick={handleLogOut} className="btn w-28 btn-outline btn-sm">Logout</Link> : <Link to='/login' className="btn w-28 btn-outline btn-sm">Login</Link>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;