import { FaRegCircleXmark } from "react-icons/fa6";

const Wishlist = ({wish}) => {
    const {image, description, title, price} = wish
    return (
        <div className="p-8 border rounded-[16px] bg-white flex gap-8">
                <div className="w-[274px]">
                <img className="rounded-[12px] h-full" src={image} alt="" />
                </div>
                <div className="w-[910px] flex justify-between">
                    <div>
                        <h1 className="text-[24px] font-semibold">{title}</h1>
                        <p className="mt-3 text-[18px] text-[#09080F99]">{description}</p>
                        <p className="mt-4 text-[20px] font-semibold">Price: ${price}</p>
                        <button className="mt-4 px-[26px] py-[13px] bg-[#9538E2] text-white rounded-[32px] text-[18px] font-medium">
                        Add to Cart
                        </button>
                    </div>
                    <div className="text-red-600">
                    <button><FaRegCircleXmark size={30}/></button>
                    </div>
                </div>
            </div>
    );
};

export default Wishlist;