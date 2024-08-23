import { Router } from "express"
import routerCarros from "./carros.routes.js"

const route = Router()

route.use("/api", routerCarros)

export default route