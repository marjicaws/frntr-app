import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services/products'

export default function EditProduct() {

  const [product, setProduct] = useState({title:'', img:'', price:'', description:'', category:''})

  const params = useParams()
  useEffect(() => {
    const findProduct = async () => {
      const foundProduct = await getProduct(params.id)
      setProduct(foundProduct)
    }
    findProduct()
  }, [])


  return (
    <div>
      
    </div>
  )
}
