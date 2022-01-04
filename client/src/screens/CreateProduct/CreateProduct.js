import React from 'react'
import './CreateProduct.css'
import Layout from "../../components/Layout/Layout";
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
    <Layout>
      <div className="createProduct_container">
        <div className="createProduct_card">
          <h1 className="createProduct_title">Submit a New Product</h1>
          <p className="createProduct_description">Add a new product to the collection</p>
          <form className="createProduct_form"
            onSubmit={handleSubmit} >
            <label>Name</label>
            <input
                  type="text"
                  value={title}
                  placeholder="Name"
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  
            />
            <label>Price</label>
                <input
                  type="text"
                  value={price}
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                  
            />
            <label>Description</label>
                <input
                  type="text"
                  value={description}
                  placeholder="Description of Item"
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  
            />
            <label>Img Url</label>
                <input 
                type="url"
                value={img}
                placeholder='Image Url'
                onChange={(e) => setImg(e.target.value)} 
                id="img"
                />
              <label>Select a Category</label>
                <select id="category" name="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="null">Select Category</option>
                    <option value="Furniture">Furniture </option>
                    <option value="Backyard" > Backyard</option>
                    <option value="Kitchen" >Kitchen </option> 
                </select>
                
                <button className="createProduct_button" type="submit" >Submit</button>
          </form>
          </div>
      </div>
      </Layout>
    )
}
