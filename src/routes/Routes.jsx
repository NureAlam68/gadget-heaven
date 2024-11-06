import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import NoData from "../components/NoData";
import GadgetDetails from "../pages/GadgetDetails";
import Dashboard from "../pages/Dashboard";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";




const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("../categories.json"),
                children: [
                    {
                        path: "/",
                        element: <GadgetCards></GadgetCards>,
                        loader: ()=> fetch("../data.json")
                    },
                    {
                        path: "/category/:category",
                        element: <GadgetCards></GadgetCards>,
                        loader: ()=> fetch("../data.json")
                    },
                    {
                        path: "/nodata",
                        element: <NoData></NoData>
                    }
                ]
            },
            {
                path: "/gadget/:id",
                element: <GadgetDetails></GadgetDetails>,
                loader: ()=> fetch('../data.json')
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                loader: ()=> fetch("../data.json"),
            }
        ]
    }
])

export default routes