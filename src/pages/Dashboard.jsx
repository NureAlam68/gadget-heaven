import "./Dashboard.css"
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { useLoaderData, useNavigate } from "react-router-dom";
import { clearStoredCart, getStoredCart, getStoredWishlist } from "../utilities/addToLs";
import { FaSort } from "react-icons/fa";
import groupImg from "../assets/group.png"

const Dashboard = () => {
    const gadgets = useLoaderData();
    const navigate = useNavigate();

    const [isActive, setActive] = useState({
        cart: true,
        status: "cart",
    })

    const [cartList, setCart] = useState([])
    const [wishList, setWishList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [modalTotalCost, setModalTotalCost] = useState(0);
    

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

    const handlePurchase = () => {
        setModalTotalCost(totalCost);
        setShowModal(true);

        setCart([]);
        setTotalCost(0);
        setIsDisabled(true)
        clearStoredCart();
    }

    const handleCloseModal = () => {
        setShowModal(false);
        navigate("/")
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
                                <button onClick={()=> handleSort("Price")} 
                                disabled={isDisabled || cartList.length === 0}
                                className={`flex items-center gap-3 px-[22px] py-[13px] rounded-[32px] text-[18px] font-semibold ${
                                    isDisabled || cartList.length === 0
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "border border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
                                }`}><p className="text-[18px] font-semibold"
                                >Sort by Price</p><FaSort size={21}/></button>
                                <button onClick={handlePurchase}  disabled={isDisabled || cartList.length === 0 || totalCost === 0} 
                                    className={`px-[26px] py-[13px] rounded-[32px] text-[18px] font-medium ${
                                        isDisabled || cartList.length === 0 || totalCost === 0
                                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-[#9538E2] text-white hover:bg-white hover:text-[#9538E2] hover:border hover:border-[#9538E2]"
                                    }`}>Purchase</button>
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
                {showModal && (
                <dialog id="congratsModal" className="modal" open>
                    <div className="modal-box p-8 w-[400px]">
                        <div className="flex justify-center">
                        <img src={groupImg} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-center mt-6 mb-3">Payment Successfully</h3>
                        <hr />
                        <p className="py-4 text-base text-[#09080F99] font-medium text-center">Thanks for purchasing.</p>
                        <p className="text-base text-[#09080F99] font-medium text-center">Total: ${modalTotalCost}</p>
                        <div className="modal-action">
                            <button onClick={handleCloseModal} className="px-[22px] py-[9px] bg-[#11000008] font-semibold w-full rounded-[32px]">Close</button>
                        </div>
                    </div>
                </dialog>
            )}
            
        </div>
    );
};

export default Dashboard;