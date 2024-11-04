import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="pt-[30px] px-[30px]">
      <div className="h-[694px] bg-[#9538E2] rounded-[32px] border-[7px] relative">
        <div className="px-[130px] pt-[30px] flex justify-between items-center">
          <div>
            <h2 className="text-[20px] text-white font-bold">Gadget Heaven</h2>
          </div>
          <div className="flex gap-[48px] text-base font-bold text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink>Gadgets</NavLink>
            <NavLink>Statistics</NavLink>
            <NavLink>Dashboard</NavLink>
          </div>
          <div className="flex gap-4">
            <button className="h-10 w-10 border bg-white border-[#0B0B0B1A] rounded-full flex justify-center items-center">
              <IoCartOutline size={20} />
            </button>
            <button className="h-10 w-10 border bg-white border-[#0B0B0B1A] rounded-full flex justify-center items-center">
              <CiHeart size={20} />
            </button>
          </div>
        </div>
        <div className="mt-[48px] w-[1120px] mx-auto">
          <h1 className="text-[56px] font-bold text-white text-center">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="w-[796px] text-center text-white text-base font-normal mt-4 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center mt-8">
          <button className="bg-white text-[#9538E2] px-[30px] py-[15px] rounded-[32px] text-[20px] font-bold">
            Shop Now
          </button>
          </div>
        </div>
      </div>
      <div className="w-[1110px] h-[610px] border-2 border-white rounded-[32px] p-6 bg-[#FFFFFF4D] mx-auto relative -top-[180px]">
            <div className="bg-banner h-[563px] bg-cover bg-center bg-no-repeat rounded-[24px] w-full">

            </div>
      </div>
    </div>
  );
};

export default Navbar;
