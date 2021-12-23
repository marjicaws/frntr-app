import './FeaturedProducts.css'
import ProductCard from '../ProductCard/ProductCard.js'
import { useEffect, useState } from 'react'
import { getKitchen, getBackyard, getFurniture } from '../../services/products'


export default function FeaturedProducts() {

  const [featuredProductArr, setFeaturedProductArr] = useState([])

  useEffect(() => {

    const fetchKitchen = async () => {
      const foundKitchen = await getKitchen()
      setFeaturedProductArr([...featuredProductArr,
        featuredProductArr.push
          (foundKitchen[Math.floor(Math.random() * foundKitchen.length - 1)])])
    }

    const fetchBackyard = async () => {
      const foundBackyard = await getBackyard()
      setFeaturedProductArr([...featuredProductArr,
      featuredProductArr.push(foundBackyard[Math.floor(Math.random() * foundBackyard.length - 1)])])
    }

    const fetchFurniture = async () => {
      const foundFurniture = await getFurniture()
      setFeaturedProductArr([...featuredProductArr,
      featuredProductArr.push(foundFurniture[Math.floor(Math.random() * foundFurniture.length - 1)])])
    }
    fetchKitchen()
    fetchBackyard()
    fetchFurniture()
  }, [])

  return (
    <div>
      {
        featuredProductArr.map((product) => (
          <ProductCard id={product._id}
            title={product.title}
            img={product.img}
            description={product.description}
            price={product.price}
            category={product.category}
          />
        ))
      }
    </div>
  )
}
