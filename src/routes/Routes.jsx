import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";




const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>
    }
])

export default routes