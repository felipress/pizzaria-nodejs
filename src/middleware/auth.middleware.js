const jwt = require("jsonwebtoken")
const {findUserById} = require("../service/user.service")


// User logged
const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).send({
            message: "O token não foi informado."
        })
    }

    const parts = authHeader.split(" ")

    if(parts.length != 2){
        return res.status(401).send({
            message: "Token inválido."
        })
    }

    const [schema, token] = parts

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({
            message: "Token malformado."
        })
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err){
            return res.status(500).send({
                message: "Token inválido."
            })
        }

        const user = await findUserById(decoded.id)

        if(!user || !user.id){
            return res.status(401).send({
                message: "Token inválido."
            })
        }

        req.userId = decoded.id
        
        return next()
    })
}

// Admin user
const adminUser = async (req, res, next) => {
    const user = await findUserById(req.userId)
    
    if(user.adminUser == false){
        return res.status(401).send({
            message: "É necessário ser um administrador para executar esta ação."
        })
    }
    return next()
}

module.exports = {
    auth,
    adminUser
}