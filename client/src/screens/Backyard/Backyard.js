import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import { getBackyard } from "../../services/products.js";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts.js";
import "./Backyard.css";

export default function Backyard({ user }) {
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
      <h1 className="backyard_title">Backyard</h1>
      <div className="all-backyard-container">
        <div className="order-backyard-cards">
          {backyard ? (
            <DisplayedProducts
              user={user}
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
