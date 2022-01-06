import React from "react";
import { useEffect, useState } from "react";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts";
import Layout from "../../components/Layout/Layout";
import "./Furniture.css";
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

  return (
    <Layout>
      <h1 className="furniture_title">Furniture</h1>
      <div className="all-furniture-container">
        <div className="order-furniture-cards">
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
