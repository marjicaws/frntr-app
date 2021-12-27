import React from 'react'
import { deleteProduct } from '../../services/products.js'

export default function Delete() {

deleteProduct()


  return (
    <div>
      <button onClick={deleteProduct}></button>
    </div>
  )
}
