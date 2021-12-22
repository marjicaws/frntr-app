import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const products = [
    {
      title: "Really Cool Chair",
      img: "url.com",
      price: "$500",
      description: "This chair is super awesome and blue",
      category: "Furniture",
    },
    {
      title: "Awesome Stone Dog",
      img: "url.com",
      price: "$199",
      description: "This dog is scarier then a regular dog",
      category: "Backyard",
    },
    {
      title: "Electronic Knife Set",
      img: "url.com",
      price: "$99",
      description: "Who knew this was a thing",
      category: "Kitchen",
    },
  ];

  const user = new User({
    username: "LilyPott",
    email: "lpott@gmail.com",
    password_digest: await bcrypt.hash("butterfly", 11),
  });
  await user.save();

  const user2 = new User({
    username: "ApplePott",
    email: "apott@yahoo.com",
    password_digest: await bcrypt.hash("swanSong", 11),
  });

  await user2.save();
  const user3 = new User({
    username: "RosePott",
    email: "rpott@gmail.com",
    password_digest: await bcrypt.hash("butterfly", 11),
  });

  await user3.save();
  await Product.insertMany(products);
  console.log("Added Products");

  db.close();
};

insertData();
