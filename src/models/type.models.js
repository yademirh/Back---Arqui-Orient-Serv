import PgConnection from "../services/pgConnection.services.js"

export const getTypesModel = async () => {
    const pg = new PgConnection();
    return await pg.connection.query("SELECT * FROM TYPE");
}

export default {
    getTypesModel,
}