import db from '../db/connection.js'
import product from '../models/product.js'
import Post from '../models/product.js'

const insertData = async () => {
  await db.dropDatabase()

  const products = [
    {
      title: "Really Cool Chair",
      img: "url.com",
      price: "$500",
      description: "This chair is super awesome and blue",
      category: "Furniture"
    },
    {
      title: "Awesome Stone Dog",
      img: "url.com",
      price: "$199",
      description: "This dog is scarier then a regular dog",
      category: "Backyard"
    },
    {
      title: "Electronic Knife Set",
      img: "url.com",
      price: "$99",
      description: "Who knew this was a thing",
      category: "Kitchen"
    },
  ]

  await product.insertMany(products)
  console.log('Added Products')

  db.close()
}

insertData()