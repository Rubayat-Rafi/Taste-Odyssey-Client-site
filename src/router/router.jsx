import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyFoods from "../Pages/MyFoods";
import AddFoods from "../Pages/AddFoods";
import MyOrder from "../Pages/MyOrder";
import FoodDetails from "../Pages/FoodDetails";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/all-foods',
                element: <AllFoods/>,
            },
            {
                path:'/gallery',
                element: <Gallery/>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/my-foods",
                element:<PrivetRoute><MyFoods/></PrivetRoute>
            },
            {
                path: "/add-food",
                element: <PrivetRoute><AddFoods/></PrivetRoute>
            },
            {
                path: "/my-orders",
                element: <PrivetRoute><MyOrder/></PrivetRoute>
            },
            {
                path: "/food-details",
                element: <FoodDetails/>
            }
        ],


    },
])