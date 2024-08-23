import carroModel from "../models/carro.models.js"
import typeModels from "../models/type.models.js";

export async function getAllCar (req , res) {

    let datosCarro = await carroModel.getCarrosModel();
    let datosType = await typeModels.getTypesModel();

    res.status(200).json({
        "success" : true,
        "msg" : "Llegamos al getAllCar",
        "carro" : datosCarro,
        "type" : datosType
    })
}

export const postCar = (req , res) => {
    res.status(200).json({
        "success" : true,
        "msg" : "Llegamos al postCar"
    })
}

export default {
    getAllCar,
    postCar
}