import Client from "../models/Client.js";
import Product from "../models/Product.js";
import Users from "../models/Users.js";

export const create = async (req, res) => {
  try {
    const {
      type,
      image,
      title,
      price,
      discount,
      rating,
      description,
      detailedDescription,
      additionalInfo,
    } = req.body;

    const newProduct = new Product({
      type: type,
      image: image,
      title: title,
      price: price,
      discount: discount,
      rating: rating,
      description: description,
      detailedDescription: detailedDescription,
      additionalInfo: additionalInfo,
    });
    await newProduct.save();

    res.json(newProduct);
    // res.json({ message: "hwllo world okk" });
  } catch (error) {
    res.json({ message: error });
  }
};

export const getAll = async (req, res) => {
  const type = res.req.query.type;
  try {
    const products = await Product.find();
    const sliced = products.slice(0, 4);
    if (!products) {
      return res.json({ message: "продуктов  нет" });
    }

    res.json({ products: type === "all" ? products : sliced });
  } catch (error) {
    res.json({ message: "Что-то пошло не так." });
  }
};

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const newSubscribe = new Users({
      email: email,
    });
    await newSubscribe.save();

    res.json(newSubscribe);
    // res.json({ message: "hwllo world okk" });
  } catch (error) {
    res.json({ message: error });
  }
};
export const getAllEmails = async (req, res) => {
  try {
    const users = await Users.find();

    if (!users) {
      return res.json({ message: "emails  нет" });
    }

    res.json({ users });
  } catch (error) {
    res.json({ message: "Что-то пошло не так." });
  }
};

export const order = async (req, res) => {
  try {
    const { fullName, email, address, phone, message, basket, allTotal } = req.body;

    const newClient = new Client({
      fullName: fullName,
      email: email,
      address: address,
      phone: phone,
      message: message,
      basket: basket,
      allTotal: allTotal,
    });
    await newClient.save();

    res.json(newClient);
  } catch (error) {
    res.json({ message: error });
  }
};
export const getAllorders = async (req, res) => {
  try {
    const orders = await Client.find();

    if (!orders) {
      return res.json({ message: "продуктов  нет" });
    }

    res.json({ orders });
  } catch (error) {
    res.json({ message: "Что-то пошло не так." });
  }
};
export const getOrderById = async (req, res) => {
  const id = res.req.query.id;
  try {
    const client = await Client.findById(id);
    res.json(client);
  } catch (error) {
    res.json({ message: "Что-то пошло не так." });
  }
};

export const finishedOrder = async (req, res) => {
  const id = req.body.id;

  try {
    const client = await Client.findByIdAndDelete(id);
    if (!client) return res.json({ message: "Такого поста не существует" });

    res.json({ message: "Заказы был удален." });
  } catch (error) {
    res.json({ message: "Что-то пошло не так." });
  }
};
