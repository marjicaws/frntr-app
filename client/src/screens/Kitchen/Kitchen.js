import { useEffect, useState } from "react";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts.js";
import Layout from "../../components/Layout/Layout.js";
import { getKitchen } from "../../services/products.js";
import "./Kitchen.css";

export default function Kitchen() {
  const [kitchen, setKitchen] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const grabKitchen = async () => {
      const res = await getKitchen();
      setKitchen(res);
      setSearchedProducts(res);
    };
    grabKitchen();
  }, []);

  return (
    <Layout>
      <div className="all-container">
        <div className="order-cards">
          {kitchen ? (
            <DisplayedProducts
              products={kitchen}
              setSearchedProducts={setSearchedProducts}
              searchedProducts={searchedProducts}
            />
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
