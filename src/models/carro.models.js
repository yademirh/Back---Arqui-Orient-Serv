import PgConnection from "../services/pgConnection.services.js"

export const getCarrosModel = async () => {
    const pg = new PgConnection();
    return await pg.connection.query("SELECT * FROM CARRO");

    console.log("Llegueeeeee")
}

export const postCarroModel = () => {

}

export default {
    getCarrosModel,
    postCarroModel
}