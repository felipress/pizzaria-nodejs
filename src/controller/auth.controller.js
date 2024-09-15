const authService = require("../service/auth.service")
const bcrypt = require("bcrypt")

const login = async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await authService.login(email)
    
        const isPasswordValid = await bcrypt.compare(password, user.password)
        
        if(isPasswordValid){
            const token = authService.generateToken(user.id)
            return res.status(200).send({
                email,
                token
            })
        }
        else{
            return res.status(401).send({
                message: `E-mail ou senha inválidos.`
            })
        }
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    login
}