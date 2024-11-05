import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="text-[18px] font-medium  p-6">
            <div className="bg-[#09080F0D] px-[22px] py-[11px] rounded-[32px]">
                <NavLink to="/">All Product</NavLink>
            </div>
            <div className="flex flex-col gap-6 mt-6">
            {
                categories.map(category => <NavLink to={`/category/${category.category}`} className="bg-[#09080F0D] px-[22px] py-[11px] rounded-[32px]" key={category.id}>
                    {category.category}
                </NavLink>)
            }
            </div>
            <div className="bg-[#09080F0D] px-[22px] py-[11px] rounded-[32px] mt-6">
                <NavLink to="/nodata">MacBook</NavLink>
            </div>
        </div>
    );
};

export default Categories;