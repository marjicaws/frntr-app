import { useEffect } from "react";

export default function ShoppingCart() {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
  }, []);
  return <div></div>;
}
