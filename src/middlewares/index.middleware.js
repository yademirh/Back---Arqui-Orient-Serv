import { Router } from "express";
import { verifyToken } from "./token.middleware.js";

const middleware = Router()

middleware.use("/api", verifyToken)
middleware.get("/carro/:")

export default middleware