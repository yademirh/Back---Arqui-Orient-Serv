import pgPromise from "pg-promise"

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

        this.connection = pgp("postgres://postgres:admin@127.0.0.1:5432/postgres");
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