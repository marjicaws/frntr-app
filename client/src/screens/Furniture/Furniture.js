import React from "react";
import { useEffect, useState } from "react";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts";
import Layout from "../../components/Layout/Layout";

import { getFurniture } from "../../services/products.js";

export default function Furniture() {
  const [furniture, setFurniture] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const grabFurniture = async () => {
      const res = await getFurniture();
      setFurniture(res);
      setSearchedProducts(res);
    };
    grabFurniture();
  }, []);

  console.log(furniture);
  return (
    <Layout>
      <div className="all-container">
        <div className="order-cards">
          {furniture ? (
            <DisplayedProducts
              products={furniture}
              setSearchedProducts={setSearchedProducts}
              searchedProducts={searchedProducts}
            />
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
