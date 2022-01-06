import React from 'react'
import { deleteProduct } from '../../services/products.js'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Delete/Delete.css'

export default function Delete() {

  

  const params = useParams()
  const navigate = useNavigate()

  

  const handleDelete = () => {
    deleteProduct(params.id)
    navigate('/')
  }



  return (
    <div className='delete-btn'>
      <button className="button"onClick={handleDelete}>Delete</button>
    </div>
  )
}
