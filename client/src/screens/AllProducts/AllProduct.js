import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";

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

  const handleSearch = (e) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedProducts(results);
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Layout>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleSearch(e)}
          placeholder="search"
          type="text"
          value={value}
        />
      </form>
      {searchedProducts.map((product) => {
        return (
          <ProductCard
            id={product?._id}
            title={product?.title}
            img={product?.img}
            description={product?.description}
            price={product?.price}
            category={product?.category}
          />
        );
      })}
    </Layout>
  );
}
