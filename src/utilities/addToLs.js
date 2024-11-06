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
        alert("Already exist")
    }
    else{
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem("cart", storedCartStr)
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
        alert("Already exist")
    }
    else{
        storedWish.push(id);
        const storedWishStr = JSON.stringify(storedWish);
        localStorage.setItem("wish", storedWishStr)
    }
}


export {getStoredCart, getStoredWishlist, addToStoredCart, addToStoredWish}