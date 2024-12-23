import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
            }
            
        ],




    },
])