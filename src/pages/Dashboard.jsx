import "./Dashboard.css"
import { useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
    const [isActive, setActive] = useState({
        cart: true,
        status: "cart",
    })

    const handleActive = status => {
        if(status === "cart"){
            setActive({
                cart: true,
                status: "cart"
            })
        }
        else{
            setActive({
                cart: false,
                status: "wishlist",
            })
        }
    }


    return (
        <div>
            <div className="h-[256px] bg-[#9538E2] p-8">
            <h1 className="text-[32px] font-bold text-white text-center">Dashboard</h1>
            <p className="w-[796px] mx-auto text-center mt-4 text-white font-normal text-base">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <section className="flex justify-center mt-8 gap-6">
                <button onClick={()=> handleActive("cart")} className={`${isActive.cart?"btn-one active-btn" : "btn-one"}`}>Cart</button>
                <button onClick={()=> handleActive("wishlist")}  className={`${isActive.cart? "btn-one" : "active-btn btn-one"}`}>Wishlist</button>
            </section>
            </div>
            
                <div className="mt-[48px]">
                {
                    isActive.cart ? <Cart></Cart> : <Wishlist></Wishlist>
                }
                </div>
            
        </div>
    );
};

export default Dashboard;