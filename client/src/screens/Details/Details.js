import { getProduct } from "../../services/products.js";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <div>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h3>{product.price}</h3>
        <p>Add to Cart</p>
        <p>Save to Wishlist</p>
        <img src={product.img} alt="image" />
        <Link to={`/product/edit/${product._id}`} > 
        <button>Edit Product</button>
        </Link>
        {/* <PostReviews /> */}
      </div>
    </Layout>
  );
}
