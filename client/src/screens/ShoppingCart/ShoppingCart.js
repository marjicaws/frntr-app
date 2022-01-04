import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import CartCard from "../../components/CartCard/CartCard";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [cartItems, setCartItems] = useState();
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    const grabCart = () => {
      let newCart = JSON.parse(localStorage.getItem("cart"));
      console.log(newCart);
      setCart(newCart);
      let total = 0;
      newCart.map((product) => {
        total += parseInt(product.price.slice(1));
      });
      setCartTotal(total);
      setCartItems(newCart.length);
    };
    grabCart();
  }, [toggle]);

  const handleDeleteCart = (e) => {
    e.preventDefault();
    const clearCart = [];
    localStorage.setItem("cart", JSON.stringify(clearCart));
    setToggle(!toggle);
  };

  const handleDeleteProduct = (e, index) => {
    e.preventDefault();
    setCart(cart.splice(index, 1));
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    setToggle(!toggle);
  };

  return (
    <Layout>
      <div classsName="all-cart-container">
        <>
          {cart.map((product, index) => (
            <CartCard
              product={product}
              handleDeleteProduct={handleDeleteProduct}
              index={index}
            />
          ))}
          <h2>Total amount: ${cartTotal}</h2>
          <h3>Number of Items: {cartItems}</h3>
          <button onClick={(e) => handleDeleteCart(e)}>Delete Cart</button>
          <p>bottom</p>
        </>
      </div>
    </Layout>
  );
}
