import "./Home.css";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.js";
import RecentProducts from "../../components/RecentProducts/RecentProducts";
import Layout from '../../components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
    <div>
      <FeaturedProducts />
      <RecentProducts />
    </div>
    </Layout>
  );
}
