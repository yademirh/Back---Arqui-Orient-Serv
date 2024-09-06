import PgConnection from "../services/pgConnection.services.js"

export const getCarrosModel = async () => {
    const pg = new PgConnection();
    // Hago consulta
    return await pg.connection.query("SELECT * FROM CAR");

    console.log("Llegueeeeee")
}

export const getCarUniModel = async (id_carro) => {
    try{
        const pg = new PgConnection();
        // Hago consulta
        return await pg.connection.query("SELECT * FROM CAR WHERE ID_CARRO = $1" , [id_carro]);
    }catch(error){
        return [];
    }
}

export const postCarroModel = async (name, year, company) => {
    const pg = new PgConnection();
    // Hago consulta
    return await pg.connection.query("INSERT INTO CAR (NAME, YEAR, COMPANY) VALUES ($1, $2, $3) returning *" , [name, year, company]);
}

export const putCarroModel = async (name, year, company, id_carro) => {
    const pg = new PgConnection();
    return await pg.connection.query("UPDATE CAR SET NAME = ${nom}, YEAR = ${an}, COMPANY = ${em} WHERE ID_CAR = ${id} returning *"
     , {
        nom : name,
        an : year,
        em : company,
        id : id_carro
     });
}

export const deleteCarroModel = async (id_carro) => {
    const pg = new PgConnection();
    return await pg.connection.query("DELETE FROM CAR WHERE ID_CAR = ${id} returning *", {id : id_carro})
}

export default {
    getCarrosModel,
    postCarroModel,
    getCarUniModel,
    putCarroModel,
    deleteCarroModel
}