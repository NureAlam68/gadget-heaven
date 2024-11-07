import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({gadget}) => {
    const {title, image, price, id} = gadget
    return (
        <div className="p-5 bg-white rounded-[16px] border">
            <img className="h-[181px] w-[282px] rounded-[12px]" src={image} alt="" />
            <h2 className="text-[24px] font-semibold mt-6">
                {title}
            </h2>
            <p className="mt-3 text-[20px] font-medium text-[#09080F99]">
                Price: ${price}
            </p>
            <button className="px-[22px] py-[13px] rounded-[32px] border-2 border-x-purple-600 border-t-purple-600 border-b-pink-500 mt-4 text-[18px] text-[#9538E2] font-semibold hover:bg-[#9538E2] hover:text-white hover:border-b-purple-600">
                <Link to={`/gadget/${id}`}>View Details</Link>
            </button>
        </div>
    );
};


Card.propTypes = {
    gadget: PropTypes.object
}


export default Card;