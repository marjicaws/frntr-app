import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import { getBackyard } from "../../services/products.js";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts.js";
import './Backyard.css'

export default function Backyard() {
  const [backyard, setBackyard] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const grabBackyard = async () => {
      const res = await getBackyard();
      setBackyard(res);
      setSearchedProducts(res);
    };
    grabBackyard();
  }, []);

  return (
    <Layout>
      <h1>Backyard Products</h1>
      <div className="all-backyard-container">
        <div className="order-backyard-cards">
          {backyard ? (
            <DisplayedProducts
              products={backyard}
              setSearchedProducts={setSearchedProducts}
              searchedProducts={searchedProducts}
            />
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
