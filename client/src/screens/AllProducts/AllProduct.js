import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";

import { getProducts } from "../../services/products";
import { useEffect, useState } from "react";

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [applySort, setApplySort] = useState(true);

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

  const handleSort = (e) => {
    if (e.target.value === "alpha-ascending") {
      const sortAZ = searchedProducts.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setSearchedProducts(sortAZ);
      setApplySort(!applySort);
    }
    if (e.target.value === "alpha-descending") {
      const sortZA = searchedProducts.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return 1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      setSearchedProducts(sortZA);
      setApplySort(!applySort);
    }
    if (e.target.value === "price-ascending") {
      const priceLH = searchedProducts.sort(
        (a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1))
      );
      setSearchedProducts(priceLH);
      setApplySort(!applySort);
    }
    if (e.target.value === "price-descending") {
      const priceHL = searchedProducts.sort(
        (a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1))
      );
      setSearchedProducts(priceHL);
      setApplySort(!applySort);
    }
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Layout>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleSearch(e)}
          placeholder="search"
          type="text"
        />
      </form>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select onChange={(e) => handleSort(e)}>
          <option selected disabled>
            Sort By:
          </option>
          <option value="alpha-ascending">Alphabetically A-Z</option>
          <option value="alpha-descending">Alphabetically Z-A</option>
          <option value="price-ascending">Price low to high</option>
          <option value="price-descending">Price, high to low</option>
        </select>
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
