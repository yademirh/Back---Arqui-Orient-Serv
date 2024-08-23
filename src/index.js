// import express from "express"
// import multer from "multer";

// const app = express();

// app.use(express.json()); // esto es para habilitar el res.body
// app.use(express.urlencoded({extended : true})) // para que me acepte datos que vengan en el formato x-www-form-urlencoded

// const upload = multer({
//     dest: '/upload'
// })

// app.get("/", (req, res) => {
//     /*res.status(200).send(
//         "<h1>Holaaaaa</h1>"
//     );*/
//     res.status(200).json({
//         success: true,
//         data: []
//     })
// })

// app.get("/home/:variable/:opa", upload.none() ,(req, res) => {
//     req.query;
//     req.body;
//     req.params;
//     req.headers;
//     res.status(200).json({
//         msg: "Metodo get",
//         query: req.query,
//         body: req.body,
//         params: req.params,
//         headers: req.headers
//     })
// })

// app.post("/home", (req , res)=>{
//     req.query;
//     req.body;
//     req.params;
//     req.headers;
//     res.status(200).json({
//         query: req.query,
//         body: req.body,
//         params: req.params,
//         headers: req.headers
//     })
// })

// app.listen(8080, () => {
//     console.log("Hola Servidor");
// })

import Server from "./config/server.js";

const run = new Server();

run.runServer();