import express from "express"
import { environment } from "./default.js";
import route from "../routes/index.routes.js";
import PgConnection from "../services/pgConnection.services.js";
import middleware from "../middlewares/index.middleware.js";



export default class Server {
    constructor (){
        this.app = express();
        this.port = environment.port;
    }

    async connectionDB(){
        new PgConnection();
    }

    middlewares(){ 
        // configuro para que acepte objeto tipo JSON
        this.app.use(express.json())
        // activo el uso de middleware personalizado
        this.app.use(middleware)
    }

    route(){
        this.app.use(route)
    }

    runServer(){
        // esto tiene ese orden por una razon
        this.connectionDB();
        this.middlewares();
        this.route();
        this.app.listen(this.port, ()=>{
            console.log(`Hola servidor ${this.port}`)
        })
    }
}