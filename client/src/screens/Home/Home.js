import "./Home.css";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.js";
import RecentProducts from "../../components/RecentProducts/RecentProducts";

export default function Home() {
  return (
    <div>
      <FeaturedProducts />
      <RecentProducts />
    </div>
  );
}
