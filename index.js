import express from "express";
const app = express();
import dotenv from "dotenv"
import Connection from "./db/conn.js";
import buyerRouter from "./routes/buyers/buyerRoutes.js";
import cors from "cors"
import sellerRouter from "./routes/sellers/sellerRoutes.js";


const port = 8000;
dotenv.config()
app.use(express.json())
app.use(cors())

Connection()

app.use("/api/buyers", buyerRouter);
app.use("/api/sellers", sellerRouter)
app.listen(port, () => {
    console.log("Listening on 8000");
})
