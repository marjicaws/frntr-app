import React from 'react'
import {  useState } from 'react'
import { createProduct } from '../../services/products'

export default function CreateProduct() {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSubmit = {
          title,
          price,
          description,
          img,
          category,
        };
        await createProduct(newSubmit);
      };

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <input
                  type="text"
                  value={title}
                  placeholder="Name"
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  
                />
                <input
                  type="text"
                  value={price}
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                 
                  id="price"
                  
                />
                <input
                  type="text"
                  value={description}
                  placeholder="Description of Item"
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  
                />
                <input 
                type="url"
                value={img}
                placeholder='Image Url'
                onChange={(e) => setImg(e.target.value)} 
                id="img"
                />

                
                <select id="category" name="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="null">Select Category</option>
                    <option value="Furniture">Furniture </option>
                    <option value="Backyard" > Backyard</option>
                    <option value="Kitchen" >Kitchen </option> 
                </select>
                
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
