import Layout from "../../components/Layout/Layout";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts";

import { getProducts } from "../../services/products";
import { useEffect, useState } from "react";

export default function AllProduct() {
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
      {console.log(products)}
      {products ? (
        <DisplayedProducts
          products={products}
          setSearchedProducts={setSearchedProducts}
          searchedProducts={searchedProducts}
        />
      ) : null}
    </Layout>
  );
}
