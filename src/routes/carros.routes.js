import { Router } from "express"
// import { getAllCar ,postCar } from "../controllers/carro.controller.js"
import carroController from "../controllers/carro.controller.js"

const routerCarros = Router()

// routerCarros.get("/carro", getAllCar ) // sin parentesis significa que queda instanciada, se ejecuta cuando llega a la ruta
routerCarros.get("/carro", carroController.getAllCar ) 
routerCarros.post("/carro", carroController.postCar )
routerCarros.put("/carro")
routerCarros.delete("/carro")

export default routerCarros