import { getProduct } from "../../services/products.js";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Details/Details.css'
import Delete from "../../components/Delete/Delete.js";

export default function Details() {
  const [product, setProduct] = useState([]);
  const [found, setFound] = useState({});

  const params = useParams();

  useEffect(() => {
    const grabProduct = async () => {
      const item = await getProduct(params.id);
      setProduct(item);
      console.log(item);
    };
    grabProduct();
  }, [params.id]);
  console.log(product);

  return (
    <Layout>
      <div className="whole-detail">
        <div className="product-detail">
        <h1>{product.title}</h1>
        <h5>{product.description}</h5>
        <h3>{product.price}</h3>
        <div className="dead-links">
        <Link className="dead-link1" to="/products/:id" >Add to Cart</Link>
        <Link className="dead-link2" to="/products/:id">Save to Wishlist</Link>
        </div>
        </div>
       
        
        <div className="edit-btn">
        <Link to={`/product/edit/${product._id}`} > 
        <button className="edit-product">Edit Product</button>
        </Link>
        
        
        <div className="edit-product-delete">
        <Delete />
        </div>
        </div>
        
        
        <div className= "product-image">
        <img className="individual-image"src={product.img} alt="image"   />
        </div>
        
        {/* <PostReviews /> */}
        
      </div>
    </Layout>
  );
}
