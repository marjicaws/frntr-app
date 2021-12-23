import React from 'react'
import './FeaturedProducts.css'
import CardProduct from './components/PostCard.js'


export default function FeaturedProducts() {

  let featuredProductArr = []



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
