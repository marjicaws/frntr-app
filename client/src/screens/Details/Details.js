import { getProduct } from '../../services/products.js'
import { useState , useEffect } from 'react'
import Layout from "../Layout/Layout"
import { useParams } from 'react-router-dom'

export default function Details () {

    const [product, setProduct] = useState({})
    const [found, setFound] = useState({})

    const params = useParams()

    useEffect(() => {
        const grabProduct = async () => {
            const item = await getProduct(id)
            setProduct(item)
           console.log(item)
        }
        grabProduct()
    }, [id])

    useEffect(() => {
            foundProduct = product.find(thing => {
                return thing._id === params.id
            })
            setFound(foundProduct)

    },[params.id])

    return (
        <Layout >
        <div>
            <h1>Frntr</h1>
        </div>
        </Layout>
    )
}