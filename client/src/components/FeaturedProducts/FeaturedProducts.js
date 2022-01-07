import "./FeaturedProducts.css";
import ProductCard from "../ProductCard/ProductCard.js";
import { useEffect, useState } from "react";
import { getKitchen, getBackyard, getFurniture } from "../../services/products";

export default function FeaturedProducts({ user }) {
  const [featuredProductArr, setFeaturedProductArr] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      const foundKitchens = await getKitchen();
      const foundBackyards = await getBackyard();
      const foundFurnitures = await getFurniture();
      setFeaturedProductArr([
        foundKitchens[Math.floor(Math.random() * (foundKitchens.length - 1))],
        foundBackyards[Math.floor(Math.random() * (foundBackyards.length - 1))],
        foundFurnitures[
          Math.floor(Math.random() * (foundFurnitures.length - 1))
        ],
      ]);
    };
    fetchFeatured();
  }, []);

  return (
    <div>
      <h2 className="featuredProducts-title">Featured Products</h2>
      <div className="featured-cards">
        {featuredProductArr.map((product) => (
          <ProductCard
            user={user}
            product={product}
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
  );
}
