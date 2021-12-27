import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Layout from "../../components/Layout/Layout";

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
    <Layout>
      <div>
        {furniture.map((product) => (
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
    </Layout>
  );
}
