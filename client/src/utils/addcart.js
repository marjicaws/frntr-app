export const handleAddCart = (product, e) => {
  e.preventDefault();
  let oldCart = JSON.parse(localStorage.getItem("cart"));
  if (oldCart === null) {
    oldCart = [];
  }
  oldCart.push(product);
  localStorage.setItem("cart", JSON.stringify(oldCart));
  console.log(oldCart);
};
