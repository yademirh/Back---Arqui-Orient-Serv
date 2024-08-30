

export const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"]

    res.status(200).json({
        success : true,
        token : token
    })
}