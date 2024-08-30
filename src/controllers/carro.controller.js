import carroModel, { getCarUniModel, postCarroModel } from "../models/carro.models.js"
import typeModels from "../models/type.models.js";

export async function getAllCar (req , res) {

    let datosCarro = await carroModel.getCarrosModel();
    // let datosType = await typeModels.getTypesModel();

    res.status(200).json({
        "success" : true,
        "msg" : "Llegamos al getAllCar",
        "carro" : datosCarro,
        // "type" : datosType
    })
}

export async function getCarUni(req , res){
    // let id_carro = req.params["id"]
    let {id_carro} = req.params

    let data = await getCarUniModel(id_carro)
    res.status(200).json({
        success : true,
        data : data
    })
}

export const postCar = async (req , res) => {
    let {name, year, company} = req.body
    let data = await postCarroModel(name, year, company)
    res.status(200).json({
        "success" : true,
        "msg" : "Llegamos al postCar",
        data : data
    })
}

export const putCar = async ( req , res) => {
    let { id_carro } = req.params
    let { name, year, company } = req.body
    let data = await carroModel.putCarroModel(name, year, company, id_carro);
    res.status(200).json({
        success : true,
        data : data
    })
}

export const deleteCar = async ( req , res) => {
    let { id_carro } = req.params
    let data = await carroModel.deleteCarroModel(id_carro)
    res.status(200).json({
        success : true,
        data : data
    })
}

export default {
    getAllCar,
    postCar,
    getCarUni,
    putCar,
    deleteCar
}