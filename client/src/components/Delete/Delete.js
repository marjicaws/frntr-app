import React from 'react'
import { deleteProduct } from '../../services/products.js'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Delete() {

  const params = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteProduct(params.id)
    navigate('/')
  }



  return (
    <div>
      <button onClick={handleDelete}>Delete This</button>
    </div>
  )
}
