import { Router } from "express";
import {
  create,
  getAll,
  getAllEmails,
  subscribe,
  order,
  getAllorders,
  getOrderById,
  finishedOrder,
} from "../controllers/newProduct.js";
const router = new Router();

router.post("/create", create);

router.get("/", getAll);

router.post("/subscribe", subscribe);
router.get("/getUsers", getAllEmails);
router.post("/order", order);
router.get("/order", getAllorders);
router.get("/orderById", getOrderById);
router.get("/orderById", getOrderById);
router.post("/deleteOrder", finishedOrder);

export default router;
