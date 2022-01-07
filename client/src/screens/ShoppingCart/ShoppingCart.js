import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import CartCard from "../../components/CartCard/CartCard";
import { getCart, clearCart, removeFromCart } from "../../services/products";
import "./ShoppingCart.css";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

export default function ShoppingCart({ user }) {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [cartItems, setCartItems] = useState();
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    const grabCart = async () => {
      if (user) {
        const res = await getCart(user.id);
        setCart(res);
        let total = 0;
        res.map((product) => {
          total += parseInt(product.price.slice(1));
        });
        setCartItems(res.length);
        setCartTotal(total);
      } else {
        let newCart = JSON.parse(localStorage.getItem("cart"));
        setCart(newCart);
        let total = 0;
        newCart.map((product) => {
          return (total += parseInt(product.price.slice(1)));
        });
        setCartTotal(total);
        setCartItems(newCart.length);
      }
    };
    grabCart();
  }, [toggle]);

  const handleDeleteCart = (e) => {
    e.preventDefault();
    if (user) {
      clearCart(user.id);
      setToggle(!toggle);
    } else {
      const clearCart = [];
      localStorage.setItem("cart", JSON.stringify(clearCart));
      setToggle(!toggle);
    }
  };

  const handleDeleteProduct = async (e, index) => {
    e.preventDefault();
    if (user) {
      await removeFromCart(user.id, index);
      setToggle(!toggle);
    } else {
      setCart(cart.splice(index, 1));
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      setToggle(!toggle);
    }
  };

  return (
    <Layout>
      <div className="all-cart-container">
        <div className="all-cart-cards">
          {cart ? (
            cart.map((product, index) => (
              <CartCard
                user={user}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
                index={index}
              />
            ))
          ) : (
            <div>
              <h3>Your Cart is Empty. Want to add something?</h3>
              <FeaturedProducts user={user} />
            </div>
          )}
        </div>
        <div className="cart-description">
          <div className="cart-info">
            <h3>Total amount: ${cartTotal}</h3>
            <br />
            <h3>Number of Items: {cartItems}</h3>
          </div>
          <br />
          <br />
          <div className="delete-cart">
            {cart.length === 0 ? (
              <div>
                <h3>Your Cart is Empty. Want to add something?</h3>
                <FeaturedProducts user={user} />
              </div>
            ) : (
              <button onClick={(e) => handleDeleteCart(e)}>Delete Cart</button>
            )}
          </div>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  );
}
