import express from "express";
import { loginSeller, registerSeller } from "../../controllers/sellers/sellerController.js";

const sellerRouter = express.Router();

sellerRouter.post("/register", registerSeller);
sellerRouter.post("/login", loginSeller)

export default sellerRouter;