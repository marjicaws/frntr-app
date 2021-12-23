import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

import { getFurniture } from "../../services/products.js";

export default function Furniture() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    const grabFurniture = async () => {
      const res = await getFurniture();
      setFurniture(res);
    };
    grabFurniture();
  }, []);

  console.log(furniture);
  return (
    <div>
      {furniture.map((sku) => (
        <ProductCard
          title={sku.title}
          img={sku.img}
          price={sku.price}
          key={sku._id}
         sku={furniture}
        />
      ))}
    </div>
  );
}
