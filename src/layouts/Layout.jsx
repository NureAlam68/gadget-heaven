import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="max-w-[1600px] mx-auto font-sora">
            <div className="h-[1200px]">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;