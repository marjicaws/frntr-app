import React from 'react'
import {useState, useEffect} from 'react'
import ProductCard from '../../components/ProductCard/ProductCard.js'
import Layout from '../../components/Layout/Layout.js'
import { getBackyard } from '../../services/products.js'


export default function Backyard() {
  
  const [backyard, setBackyard]= useState([])

  useEffect(() => { 
    const grabBackyard = async () => {
      const res = await getBackyard()
      setBackyard(res) 
    }
    grabBackyard()
  }, [])

  return (
    <Layout>
      <div className='all-container'>
    <div className='order-cards'>
      {backyard.map((product) =>(
        <ProductCard
            id={product?._id}
            title={product?.title}
            img={product?.img}
            description={product?.description}
            price={product?.price}
            category={product?.category}
        />
      ))}
      </div>
      </div>
    </Layout>
  )
}
