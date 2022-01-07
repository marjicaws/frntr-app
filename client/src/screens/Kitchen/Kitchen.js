import { useEffect, useState } from "react";
import DisplayedProducts from "../../components/DisplayedProducts/DisplayedProducts.js";
import Layout from "../../components/Layout/Layout.js";
import { getKitchen } from "../../services/products.js";
import "./Kitchen.css";

export default function Kitchen({ user }) {
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
      <h1 className="kitchen_title">Kitchen/Dining</h1>
      <div className="all-kitchen-container">
        <div className="order-kitchen-cards">
          {kitchen ? (
            <DisplayedProducts
              user={user}
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
