import express from "express"
import { environment } from "./default.js";
import route from "../routes/index.routes.js";
import PgConnection from "../services/pgConnection.services.js";



export default class Server {
    constructor (){
        this.app = express();
        this.port = environment.port;
    }

    async connectionDB(){
        new PgConnection();
    }

    middlewares(){ this.app.use(express.json())}

    route(){
        this.app.use(route)
    }

    runServer(){
        this.connectionDB();
        this.middlewares();
        this.route();
        this.app.listen(this.port, ()=>{
            console.log(`Hola servidor ${this.port}`)
        })
    }
}