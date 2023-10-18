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
            {
                path:'/brand/:name',
                element:<BrandDetails></BrandDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.name}`)
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`),
            },
            {
                path:'/card',
                element:<MyCard></MyCard>,
                loader: ()=> fetch('http://localhost:5000/card'),
            }
        ]
    }
]);

export default Layout;