import User from "../models/user.js";
import Product from "../models/product.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "anevenbetterreallylonggoodkey";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
      role: "user",
      cart: [],
    });
    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      cart: user.cart,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        cart: user.cart,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split("")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not Authorized");
  }
};

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const cart = await Promise.all(
      user.cart.map(async (item) => {
        const product = await Product.findById(item.productId);
        return product;
      })
    );
    res.json(cart);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const product = await Product.findById(req.params.cartItemId);
    const cartItem = {
      productId: product.id,
    };
    user.cart.push(cartItem);
    await user.save();
    res.status(201).json(user.cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const productIndex = req.params.cartItemId;
    user.cart.splice(productIndex, 1);
    user.save();
    res.status(200).send("Cart item deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.cart = [];
    user.save();
    res.status(200).send("Cart cleared");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
