import { Link } from "react-router-dom";
import "./CartCard.css";

export default function CartCard({ product, index, handleDeleteProduct }) {
  return (
    <div className="cart-card-container" key={product.key}>
      <Link to={`/products/${product._id}`}>
        <div className="cart-img-container">
          <img className="cart-card-img" src={product.img} alt={product.id} />
        </div>
      </Link>
      <div className="cart-title-container">
        <h4 className="cart-card-title">{product.title}</h4>
      </div>
      <div className="cart-group">
        <button
          className="cart-add-cart"
          onClick={(e) => handleDeleteProduct(e, index, product._id)}
        >
          Remove
        </button>
        <h6>{product.price}</h6>
      </div>
    </div>
  );
}
