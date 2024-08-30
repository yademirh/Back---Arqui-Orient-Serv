import pgPromise from "pg-promise"
import { environment } from "../config/default.js";

export default class PgConnection {

    static instance;
    
    connection;
    
    constructor(){
        if(PgConnection.instance){
            return PgConnection.instance
        }
        PgConnection.instance = this;
        
        const pgp = pgPromise({ })

        /* driver : // nombre_usuario : contraseña @ direccion_de_BD : puerto / nombre:BD */

        this.connection = pgp(environment.db_url);
        this.connection.connect()
            .then( obj => {
                console.log("Me conecte " + obj.client.serverVersion);
                obj.done();
            })
            .catch(error => {
                console.log("ERROR: " + error.message || error);
            })
    }
}