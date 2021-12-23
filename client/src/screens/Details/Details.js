import { getProduct } from '../../services/products.js'
import { useState , useEffect } from 'react'
import Layout from "../Layout/Layout"

export default function Details () {

    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            const product = await getProduct(id)
            setProduct(product)
           console.log(product)
        }
        getProduct()
    }, [id])

    return (
        <div>

        </div>
    )
}