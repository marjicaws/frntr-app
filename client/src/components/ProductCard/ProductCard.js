import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard(props) {
  console.log(props);
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
        <button className="add-cart">Add to cart</button>
        <h6>{props.price}</h6>
      </div>
    </div>
  );
}
