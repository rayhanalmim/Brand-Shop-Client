import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Root/Home";
import SingIn from "../Component/Authentication/SingIn";
import SingUp from "../Component/Authentication/SingUp";
import ErrorPage from "../Component/Root/ErrorPage";
import AddProduct from "../Other Component/AddProduct";
import BrandDetails from "../Other Component/BrandDetails";
import ProductDetails from "../Other Component/ProductDetails";
import UpdateProduct from "../Other Component/UpdateProduct";
import MyCard from "../Other Component/MyCard";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";

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
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/brand/:name',
                element:<BrandDetails></BrandDetails>,
                loader: ({params}) => fetch(`https://tech-and-electronic-server-h2b6gqyhd-rayhan-al-mims-projects.vercel.app/product/${params.name}`)
            },
            {
                path:'/productDetails/:id',
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-and-electronic-server-h2b6gqyhd-rayhan-al-mims-projects.vercel.app/productDetails/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-and-electronic-server-h2b6gqyhd-rayhan-al-mims-projects.vercel.app/update/${params.id}`),
            },
            {
                path:'/card',
                element:<PrivateRoute><MyCard></MyCard></PrivateRoute>,
            }
        ]
    }
]);

export default Layout;