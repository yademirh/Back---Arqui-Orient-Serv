import jwt from "jsonwebtoken"
import { environment } from "../config/default.js"

export const verifyToken = (req, res, next) => {

    let token = req.headers["authorization"]

    // Verifica que el token NO exista
    if(!token){
        // Si no existe retorna una respuesta
        return res.status(401).json({
            success : false,
            msg : "Authorization required"
        })
    }

    token = token.split(" ")

    if( token[0] != "Bearer"){        
        return res.status(401).json({
            success : false,
            msg : "Authorization required"
        })
    }

    jwt.verify( token[1], environment.jwt_hash, (error, decode) => {
        if(error){        
            return res.status(401).json({
                success : false,
                msg : "Authorization required !!!!!!!!!"
            })
        }
        next()
    })

/* res.status(200).json({
        success : true,
        token : token,
        msg : 'Esto es un mensaje'
    }) */
}