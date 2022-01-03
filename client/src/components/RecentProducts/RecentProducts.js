import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import ProductCard from "../ProductCard/ProductCard";

export default function RecentProducts() {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const findRecentProducts = async () => {
      const foundRecentProdcuts = await getProducts();
      setRecentProducts(foundRecentProdcuts.reverse().slice(0, 6));
    };
    findRecentProducts();
  }, []);
  return (
    <div>
      <div className='all-container'>
      <div className='order-cards'>
      {recentProducts.map((product) => (
        <ProductCard
          id={product?._id}
          title={product?.title}
          img={product?.img}
          description={product?.description}
          price={product?.price}
          category={product?.category}
        />
      ))}
        </div>
        </div>
    </div>
  );
}
