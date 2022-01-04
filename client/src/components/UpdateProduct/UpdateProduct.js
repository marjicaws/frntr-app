import React from 'react'


export default function UpdateProduct(props) {
  


  return (
    <div>
      <form className="edit-products">
        <input
          className="title-input"
          placeholder="Update Product Name"
          value={props.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="price-input"
          placeholder="Update Price"
          value={props.price}
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="description-input"
          placeholder="Update Description"
          value={props.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="img-input"
          placeholder="Update Image"
          value={props.img}
          name="img"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="category-input"
          placeholder="Update Item Category"
          value={props.category}
          name="category"
          onChange={(e) => handleChange(e)}
        />  
      </form>
      <button onClick={(e) => handleSubmit(e)}>Edit</button>
    </div>
  )
}
