import "./Home.css";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.js";
import RecentProducts from "../../components/RecentProducts/RecentProducts.js";
import Layout from '../../components/Layout/Layout.js'
import Banner from "../../components/Banner/Banner.js";
import Carosel from "../../components/Carosel/Carosel.js";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Home() {
  return (
    <Layout>
      <div className="home-container">
        <div>
          <Carosel/>
        </div>
      <div className="banner">
        <Banner />
      </div>
        <div className="featured">
        <div className="all-container">
        <div className="order-cards">
              <FeaturedProducts />
            </div>
            </div>
        </div>
            <div className="recent">
            <div className="all-container">
        <div className="order-cards">
              <RecentProducts />
            </div>
            </div>
        </div>
    </div>
    </Layout>
  );
}
