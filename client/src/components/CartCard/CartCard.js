import { Link } from "react-router-dom";
import "../ProductCard/ProductCard.css";

export default function CartCard({ product, index, handleDeleteProduct }) {
  return (
    <div className="card-container" key={product.key}>
      <Link to={`/products/${product.id}`}>
        <div className="img-container">
          <img className="card-img" src={product.img} alt={product.id} />
        </div>
      </Link>
      <div className="title-container">
        <h4 className="card-title">{product.title}</h4>
      </div>
      <div className="group">
        <button
          className="add-cart"
          onClick={(e) => handleDeleteProduct(e, index)}
        >
          Remove
        </button>
        <h6>{product.price}</h6>
      </div>
    </div>
  );
}
