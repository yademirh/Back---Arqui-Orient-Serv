import { checkSchema } from "express-validator";

export const getCarroValidator = checkSchema(

  {
    id_carro : {
      isNumeric: {errorMessage: "Debe ser un numero"},
      errorMessage : "El indicador debe ser un numero"
    }
  }, ["params"]

)

export const postCarroValidator = checkSchema(
  {

  }, []
)