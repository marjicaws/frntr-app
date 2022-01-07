import React from "react";
import { Link } from "react-router-dom";
import { handleAddCart } from "../../utils/addcart";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="main-card-container">
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
          <button
            className="add-cart"
            onClick={(e) => handleAddCart(props.product, e, props.user)}
          >
            Add to{" "}
            <img
              className="mini-cart"
              src="https://i.imgur.com/DMlqxwl.png"
              alt="cart-mini"
            />
          </button>
          <h6>{props.price}</h6>
        </div>
      </div>
    </div>
  );
}
