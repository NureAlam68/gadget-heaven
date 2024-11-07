import "./Dashboard.css"
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getStoredCart, getStoredWishlist } from "../utilities/addToLs";
import { FaSort } from "react-icons/fa";

const Dashboard = () => {
    const gadgets = useLoaderData();
    const [isActive, setActive] = useState({
        cart: true,
        status: "cart",
    })

    const [cartList, setCart] = useState([])
    const [wishList, setWishList] = useState([]);
    const [totalCost, setTotalCost] = useState(0)
    

    useEffect(()=> {
        const storedCart = getStoredCart();

        const cartItem = gadgets.filter(gadget => storedCart.includes(gadget.id))
        setCart(cartItem)

        const total = cartItem.reduce((sum, item) => sum + item.price, 0)
        setTotalCost(total)
    }, [gadgets])

    useEffect(()=> {
        const storedWishList = getStoredWishlist();

        const wishItem = gadgets.filter(gadget => storedWishList.includes(gadget.id))
        setWishList(wishItem)
    }, [gadgets])

    const handleSort = sortType => {
        if(sortType === "Price"){
            const sortedCart = [...cartList].sort((a,b) => b.price - a.price)
            setCart(sortedCart)
        }
    }

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
                    isActive.cart ? 
                    <div className="px-[160px]">
                        <div className="flex justify-between items-center">
                            <h1 className="text-[24px] font-bold">Cart</h1>
                            <div className="flex gap-4 items-center">
                                <h2 className="text-[24px] font-bold mr-2">Total cost: ${totalCost}</h2>
                                <button onClick={()=> handleSort("Price")} className="flex items-center gap-3 px-[22px] py-[13px] border border-[#9538E2] text-[#9538E2] rounded-[32px]"><p className="text-[18px] font-semibold">Sort by Price</p><FaSort size={21}/></button>
                                <button className="px-[26px] py-[13px] bg-[#9538E2] rounded-[32px] text-[18px] font-medium text-white">Purchase</button>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col gap-6 pb-[100px]">
                            {
                                cartList.map(cart => <Cart cart={cart}></Cart>)
                            }
                        </div>
                    </div> : 
                    <div className="px-[160px]">
                        <div>
                        <h1 className="text-[24px] font-bold">WishList</h1>
                        </div>
                        <div className="mt-8 flex flex-col gap-6 pb-[100px]">
                            {
                                wishList.map(wish => <Wishlist wish={wish}></Wishlist>)
                            }
                        </div>
                    </div>
                }
                </div>
            
        </div>
    );
};

export default Dashboard;