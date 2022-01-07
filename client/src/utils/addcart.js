import { addToCart } from "../services/products.js";

export const handleAddCart = (product, e, user) => {
  e.preventDefault();
  if (user) {
    addToCart(user.id, product._id);
  } else {
    let oldCart = JSON.parse(localStorage.getItem("cart"));
    if (oldCart === null) {
      oldCart = [];
    }
    oldCart.push(product);
    localStorage.setItem("cart", JSON.stringify(oldCart));
  }
};
