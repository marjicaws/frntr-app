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

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(201).json(product)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(post)
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Product.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post was deleted')
    }
    throw new Error('Posts not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

