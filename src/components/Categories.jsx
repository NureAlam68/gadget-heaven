import { NavLink } from "react-router-dom";
import "./Categories.css"

const Categories = ({categories}) => {
    return (
        <div className="text-[18px] font-medium  p-6">
            <p className="flex flex-col gap-6">
            <NavLink to="/" className="bg-[#09080F0D] px-[22px] py-[11px] rounded-[32px]">All Product</NavLink>
            {
                categories.map(category => <NavLink to={`/category/${category.category}`} className="bg-[#09080F0D] px-[22px] py-[11px] rounded-[32px]" key={category.id}>
                    {category.category}
                </NavLink>)
            }
            <NavLink to="/nodata"  className="bg-[#09080F0D] px-[22px] py-[11px] rounded-[32px]">MacBook</NavLink>
            </p>
        </div>
    );
};

export default Categories;