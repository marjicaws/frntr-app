import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard(props) {
  const handleAddCart = () => {
    let oldCart = JSON.parse(localStorage.getItem("cart"));
    if (oldCart === null) {
      oldCart = [];
    }
    oldCart.push(props.product);
    localStorage.setItem("cart", JSON.stringify(oldCart));
    console.log(oldCart);
  };

  return (
    <div className="card-container" key={props.key}>
      <Link to={`/products/${props.id}`}>
        <div className="img-container">
          <img className="card-img" src={props.img} alt={props.id} />
        </div>
      </Link>
      <div className="title-container">
        <h4 className="card-title">{props.title}</h4>
      </div>
      <div className="group">
        <button className="add-cart" onClick={handleAddCart}>
          Add to cart
        </button>
        <h6>{props.price}</h6>
      </div>
    </div>
  );
}
