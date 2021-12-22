import Product from '../models/product.js'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getKitchen = async (req, res) => {
  try {
    const products = await Product.find({ category:"Kitchen" }).exec()
    res.json(products)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getFurniture = async (req, res) => {
  try {
    const products = await Product.find({ category:"Furniture" }).exec()
    res.json(products)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getBackyard = async (req, res) => {
  try {
    const products = await Product.find({ category:"Backyard" }).exec()
    res.json(products)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}