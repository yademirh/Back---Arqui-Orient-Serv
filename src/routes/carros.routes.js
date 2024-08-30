import { Router } from "express"
// import { getAllCar ,postCar } from "../controllers/carro.controller.js"
import carroController from "../controllers/carro.controller.js"

const routerCarros = Router()

// routerCarros.get("/carro", getAllCar ) // sin parentesis significa que queda instanciada, se ejecuta cuando llega a la ruta
routerCarros.get("/carro", carroController.getAllCar ) 
routerCarros.get("/carro/:id_carro", carroController.getCarUni ) 
routerCarros.post("/carro", carroController.postCar )
routerCarros.put("/carro/:id_carro", carroController.putCar)
routerCarros.delete("/carro/:id_carro", carroController.deleteCar)

export default routerCarros