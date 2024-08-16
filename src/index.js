import express from "express"

const app = express();

app.get("/", (req , res)=>{
    /*res.status(200).send(
        "<h1>Holaaaaa</h1>"
    );*/
    res.status(200).json({
        success: true,
        data: []
    })
})

app.get("/home", (req , res)=>{
    res.status(200).json({
        success: true,
        msg: "Hola home"
    })
})

app.listen(100, ()=>{
    console.log("Hola");
})

