import { getProduct } from '../../services/products.js'
import { useState , useEffect } from 'react'
import Layout from "../Layout/Layout"


const ProductDetail = (props) => {
    const [product, setProduct] = useState()


    useEffect(() => {
        const getProduct = async () => {
            const product = await getProduct(id)
            setProduct(product)
            console.log(product)
            
        }
        getProduct()
    })

    return(
        <Layout>
            
        </Layout>
    )
}

