import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div key={props.key}>
      <Link to={`/products/${props._id}`}>
        <img src={props.img} alt={props._id} />
      </Link>
      <h4>{props.title}</h4>
      <h6>{props.price}</h6>
      <button>add to cart</button>
    </div>
  );
}
