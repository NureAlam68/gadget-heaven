import { useLoaderData, useParams } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { addToStoredCart, addToStoredWish } from "../utilities/addToLs";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const gadget = data.find(item => item.id === id);
  

  const {
    title,
    image,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;
  

  const handleAddCart = id => {
    addToStoredCart(id)
  }

  const handleAddWishlist = id => {
    addToStoredWish(id)
  }

  
  return (
    <div className="pb-[100px]">
      <div className="h-[375px] bg-[#9538E2]">
        <h2 className="text-[32px] font-bold text-center text-white pt-8">
          Product Details
        </h2>
        <p className="mt-4 text-base font-normal text-white w-[796px] mx-auto text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="p-8 rounded-[24px] w-[1280px] mx-auto flex gap-8 bg-white relative -mt-[200px]">
        <div className="w-[425px]">
          <img className="rounded-[16px] h-[496px]" src={image} alt="" />
        </div>
        <div>
          <h2 className="text-[28px] font-semibold">{title}</h2>
          <p className="mt-2 text-[20px] font-semibold text-[#09080FCC]">Price: ${price}</p>
          {availability && (
            <button className="px-[14px] py-[7px] bg-[#309C081A] rounded-[32px] border border-[#309C08] text-[#309C08] text-sm font-medium mt-4">
              In Stock
            </button>
          )}
          <p className="mt-4 text-[#09080F99] text-[18px] font-normal">{description}</p>
          <div className="mt-4">
            <h2 className="text-[18px] font-bold">Specification:</h2>

            <ol className="list-decimal mt-3 text-[18px] text-[#09080F99] font-normal ml-5">
              {specification?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-4">
              <p className="text-[18px] font-bold">Rating</p>
              <FaSquareFull />
            </div>
            <div className="flex items-center gap-4 mt-3">
              <div className="rating flex gap-2">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#F9C004]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#F9C004]"
                
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#F9C004]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#F9C004]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#F9C004]"
                />
              </div>
              <button className="px-[14px] py-[7px] rounded-[32px] bg-[#09080F0D]">
                {rating}
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button onClick={()=> handleAddCart(id)} className="flex items-center gap-3 px-[22px] py-[11px] rounded-[32px] bg-[#9538E2] text-white">
                <p className="text-[18px] font-bold">Add To Cart</p>
                <IoCartOutline size={25}/>
              </button>
              <button onClick={()=> handleAddWishlist(id)} className="h-10 w-10 border bg-white border-[#0B0B0B1A] rounded-full flex justify-center items-center">
              <CiHeart size={25} />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
