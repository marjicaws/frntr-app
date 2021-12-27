import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const products = [
    {
      title: "Really Cool Chair",
      img: "https://i.imgur.com/bnQlORH.png",
      price: "$500",
      description: "This chair is super awesome and blue",
      category: "Furniture",
    },
    {
      title: "Awesome Stone Dog",
      img: "https://i.imgur.com/N1tMTJx.png",
      price: "$199",
      description: "This dog is scarier then a regular dog",
      category: "Backyard",
    },
    {
      title: "Amazing Knife Set",
      img: "https://i.imgur.com/dqK0o2h.png",
      price: "$99",
      description: "Always have the correct knife at hand!",
      category: "Kitchen",
    },
    {
      title: "Premium Red Sofa",
      img: "https://i.imgur.com/ztMBvFa.png",
      price: "$250",
      description: "Relax after a stressful day of coding on this premium chair made for programmers!",
      category: "Furniture",
    },
    {
      title: "Futuristic Premium Living Room Set",
      img: "https://i.imgur.com/fcQIHij.png",
      price: "$1200",
      description: "Had a hard day coding? Relax on this futuristic premium living room set and forget you even had homework assigned!",
      category: "Furniture",
    },
    {
      title: "Bright Yellow Solo Sofa",
      img: "https://i.imgur.com/1HaEOUU.png",
      price: "$220",
      description: "Need to think of what the next step is for your project? Think better by relaxing on this sofa!",
      category: "Furniture",
    },
    {
      title: "Simple Double Sofa",
      img: "https://i.imgur.com/ZBETyDd.png",
      price: "$135",
      description: "If you're a boring person this chair is for you!",
      category: "Furniture",
    },
    {
      title: "Royalty-Like Sofa",
      img: "https://i.imgur.com/WLx8Tcx.png",
      price: "$2000",
      description: "Are you the king of coding? This chair is definitely for you!",
      category: "Furniture",
    },
    {
      title: "Green-Yellow Premium Double Sofa",
      img: "https://i.imgur.com/fbI6p1A.png",
      price: "$275",
      description: "This premium double sofa brings your living room to life and adds personality to your boring lifestyle!",
      category: "Furniture",
    },
    {
      title: "Super Premium Double Sofa",
      img: "https://i.imgur.com/ZySjRdx.jpg",
      price: "$580",
      description: "Very nice looking double sofa, perfect for you!",
      category: "Furniture",
    },
    {
      title: "Magenta Premium Fridge",
      img: "https://i.imgur.com/fkJSeUN.png",
      price: "$1350",
      description: "Premium magenta fridge perfect for your kitchen!",
      category: "Kitchen",
    },
    {
      title: "Premium Coffe Maker",
      img: "https://i.imgur.com/TVcrfRn.png",
      price: "$520",
      description: "Premium basic coffee maker!",
      category: "Kitchen",
    },
    {
      title: "Cast Iron Stove",
      img: "https://i.imgur.com/VIy5sPb.png",
      price: "$3500",
      description: "Have you ever seen a cast iron stove? Now you can if you buy this!",
      category: "Kitchen",
    },
    {
      title: "Red Premium Fridge",
      img: "https://i.imgur.com/OXeZQEH.png",
      price: "$1351",
      description: "Awesome Red Fridge to keep all your energy drinks for when you stay up all night working on your project!",
      category: "Kitchen",
    },
    {
      title: "Premium Kitchen Tool Set",
      img: "https://i.imgur.com/7yw6Qst.png",
      price: "$125",
      description: "Always be prepared with this tool set!",
      category: "Kitchen",
    },
    {
      title: "Premium Red Stove",
      img: "https://i.imgur.com/HNYcdgV.png",
      price: "$3300",
      description: "Not gonna lie, not as cool as the cast iron stove!",
      category: "Kitchen",
    },
    {
      title: "Super Amazing Deluxe Premium Coffe Maker",
      img: "https://i.imgur.com/f9YKU8Q.png",
      price: "$521",
      description: "We all need coffee in the morning before starting to code, and this right here makes the best!",
      category: "Kitchen",
    },
    {
      title: "Amazing Kitchen Tool Set",
      img: "https://i.imgur.com/07wvTLD.png",
      price: "$198",
      description: "Hang all your tools here and you can put just about anything tbh",
      category: "Kitchen",
    },
    {
      title: "Premium Pan Set",
      img: "https://i.imgur.com/Ovpv1ed.png",
      price: "$154",
      description: "Cook your best food on these pans!",
      category: "Kitchen",
    },
    {
      title: "Premium Backyard Small Playground",
      img: "https://i.imgur.com/dD9fQvw.png",
      price: "$1500",
      description: "Fun looking playground for your kids!",
      category: "Backyard",
    },
    {
      title: "Super Deluxe Smoker",
      img: "https://i.imgur.com/RpB6mxl.png",
      price: "$666",
      description: "You cannot beat this machine when it comes to smoking meats!",
      category: "Backyard",
    },
    {
      title: "Amazing Patio Set",
      img: "https://i.imgur.com/5OOg6dU.png",
      price: "$648",
      description: "A nice looking patio set!",
      category: "Backyard",
    },
    {
      title: "Regular Grill",
      img: "https://i.imgur.com/r10Wuje.png",
      price: "$320",
      description: "Just a simple grill nothing special here!",
      category: "Backyard",
    },
    {
      title: "Super Fun playground",
      img: "https://i.imgur.com/BwMY57y.png",
      price: "$482",
      description: "This one is more fun than the other one we have!",
      category: "Backyard",
    },
    {
      title: "Super Patio Set",
      img: "https://i.imgur.com/NdB0zyG.png",
      price: "$649",
      description: "Really nice looking patio set! You should get it!",
      category: "Backyard",
    }
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
