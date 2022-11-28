import { Profiler } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import AllProduct from "../Pages/AllProduct/AllProduct";
import CartProducts from "../Pages/AllProduct/CartProducts";
import Productdetails from "../Pages/AllProduct/Productdetails";
import UpdateProduct from "../Pages/AllProduct/UpdateProduct";
import Category from "../Pages/Category/Category";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import SingleProduct from "../Pages/CategoryProduct/SingleProduct";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/User/Login/Login";
import Register from "../Pages/User/Register/Register";
import UserProfile from "../Pages/User/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:"/profile",element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>},
        {path:'/category',element:<Category></Category>},
        {path:'/category/:id',
        loader:async({params})=>fetch(`http://localhost:5000/category/${params.id}`),
        element:<CategoryProduct></CategoryProduct>
        },
        {path:'/allproducts',element:<PrivateRoute><AllProduct></AllProduct></PrivateRoute>},
        {path:'/about',element:<About></About>},
        {path:'/product/:id',
        loader:async({params})=>fetch(`http://localhost:5000/product/${params.id}`),
        element:<Productdetails></Productdetails>
        },
        {path:'/cartProducts',
        element:<PrivateRoute><CartProducts></CartProducts></PrivateRoute>
        },
        {path:'/cartProduct/:id',
        loader:async({params})=>fetch(`http://localhost:5000/cartProduct/${params.id}`),
        element:<UpdateProduct></UpdateProduct>
        }
    ]
    }
])
export default router