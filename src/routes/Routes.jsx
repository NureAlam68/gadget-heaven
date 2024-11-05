import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import NoData from "../components/NoData";




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
            }
        ]
    }
])

export default routes