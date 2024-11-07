import toast from "react-hot-toast";

const getStoredCart = () => {
    const storedCartStr = localStorage.getItem("cart");

    if(storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart
    } else{
        return [];
    }
}


const addToStoredCart = (id) => {
    const storedCart = getStoredCart()

    if(storedCart.includes(id)) {
        toast.error('Already exist!');
    }
    else{
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem("cart", storedCartStr)
        toast.success('Successfully added in cart!');
    }
}



const getStoredWishlist = () => {
    const storedWishStr = localStorage.getItem("wish");

    if(storedWishStr) {
        const storedWish = JSON.parse(storedWishStr);
        return storedWish
    } else{
        return [];
    }
}


const addToStoredWish = (id) => {
    const storedWish = getStoredWishlist()

    if(storedWish.includes(id)) {
        toast.error('Already exist!');
    }
    else{
        storedWish.push(id);
        const storedWishStr = JSON.stringify(storedWish);
        localStorage.setItem("wish", storedWishStr)
        toast.success('Successfully added in wishlist!');
    }
}

const clearStoredCart = () => {
    localStorage.removeItem("cart")
}


export {getStoredCart, getStoredWishlist, addToStoredCart, addToStoredWish, clearStoredCart}