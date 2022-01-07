import Layout from "../../components/Layout/Layout";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts";
import "./AllProducts.css";

import { getProducts } from "../../services/products";
import { useEffect, useState } from "react";

export default function AllProduct({ user }) {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const grabProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setSearchedProducts(products);
    };
    grabProducts();
  }, []);

  return (
    <Layout>
      <h1 className="all-title">All Products</h1>
      {products ? (
        <DisplayedProducts
          user={user}
          products={products}
          setSearchedProducts={setSearchedProducts}
          searchedProducts={searchedProducts}
        />
      ) : null}
    </Layout>
  );
}
