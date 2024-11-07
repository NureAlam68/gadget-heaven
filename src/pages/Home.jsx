import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div className="px-[160px] -mt-20">
            <Helmet>
                <title>Gadgets | Gadget Heaven</title>
            </Helmet>
            <h1 className="text-[40px] font-bold text-center">
            Explore Cutting-Edge Gadgets
            </h1>
            <div className="mt-[100px] grid grid-cols-5 gap-6">
                <div className="border bg-white col-span-1 h-[465px] rounded-[16px]">
                    <Categories categories={categories}></Categories>
                </div>
                <div className="col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;