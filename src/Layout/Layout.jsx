import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Root/Home";
import SingIn from "../Component/Authentication/SingIn";
import SingUp from "../Component/Authentication/SingUp";
import ErrorPage from "../Component/Root/ErrorPage";
import AddProduct from "../Other Component/AddProduct";

const Layout = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/brandinfo.json')
            },
            {
                path:'/login',
                element:<SingIn></SingIn>
            },
            {
                path:'/registration',
                element:<SingUp></SingUp>
            },
            {
                path:'/add',
                element:<AddProduct></AddProduct>
            },
        ]
    }
]);

export default Layout;