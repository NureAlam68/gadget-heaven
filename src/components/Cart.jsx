import { FaRegCircleXmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {image, description, title, price} = cart
    return (
            <div className="p-8 border rounded-[16px] bg-white flex gap-8">
                <div className="w-[200px] h-[124px]">
                <img className="rounded-[12px] h-full w-full" src={image} alt="" />
                </div>
                <div className="w-[910px] flex justify-between">
                    <div>
                        <h1 className="text-[24px] font-semibold">{title}</h1>
                        <p className="mt-3 text-[18px] text-[#09080F99]">{description}</p>
                        <p className="mt-4 text-[20px] font-semibold">Price: ${price}</p>
                    </div>
                    <div className="text-red-600">
                    <button><FaRegCircleXmark size={30}/></button>
                    </div>
                </div>
            </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object
}

export default Cart;