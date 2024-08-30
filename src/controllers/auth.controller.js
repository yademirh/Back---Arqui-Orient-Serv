import jwt from "jsonwebtoken"
import { environment } from "../config/default.js"

export const login = async (req , res) => {
    
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        // son 60min
        // el token es publico, no dejar contraseñas
        data : {
            role: 'role_admin',
            doc: '123445476',
            username: 'usuario'         
        }
    } , environment.jwt_hash)

    res.status(200).json({
        success : true,
        token : token
    })

} 