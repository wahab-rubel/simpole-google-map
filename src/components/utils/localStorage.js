
export const getStoredCart = () => {
 const cart = localStorage.getItem('cart');
 return cart ? JSON.parse(cart) : [];
};

export const addToStoredCart = (id) => {
 const cart = getStoredCart();
 cart.push(id);
 localStorage.setItem('cart', JSON.stringify(cart));
};

export const getStoredWishList = () => {
 const wishlist = localStorage.getItem('wish-list');
 return wishlist ? JSON.parse(wishlist) : [];
};

export const addToStoredWishList = (id) => {
 const wishlist = getStoredWishList();
 if (!wishlist.includes(id)) {
     wishlist.push(id);
     localStorage.setItem('wish-list', JSON.stringify(wishlist));
 }
};
