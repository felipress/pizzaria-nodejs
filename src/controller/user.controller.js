const userService = require("../service/user.service")

// User CRUD functions
const findUserById = async (req, res) => {
    try{
        const user = await userService.findUserById(req.params.id)
        if(!user){
            return res.status(404).send({
                message: `Usuário não encontrado, tente novamente.`
            })
        }
        
        return res.status(200).send(user)
    }
    catch(err){
        // Return error message if ID is incorrect
        if(err){
            console.log(err.kind == "ObjectId")
            return res.status(400).send({
                message: `O ID informado está incorreto. Tente novamente!`
            })
        }

        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllUsers = async (req, res) => {
    try{
        const users = await userService.findAllUsers(req.query.limit, req.query.offset)
        return res.status(200).send(users)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createUser = async (req, res) => {
    try{
        const body = req.body
        // Creating user in the database
        return res.status(201).send(await userService.createUser(body))
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateUser = async (req, res) => {
    try{
        const body = req.body

        // Validating required fields
        validateRequiredField(res, "name", body.name)
        validateRequiredField(res, "email", body.email)
        validateRequiredField(res, "password", body.password)

        // Updating user in the database
        return res.status(200).send(await userService.updateUser(req.params.id, body))
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeUser = async (req, res) => {
    try{
        const deletedUser = await userService.removeUser(req.params.id)

        if(deletedUser != null){
            return res.status(200).send({
                message: "Usuário deletado com sucesso."
            })
        }
        else{
            return res.status(404).send({
                messagE: "Usuário não encontrado. Tente novamente."
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

// User address controller functions
const addUserAddress = async (req, res) => {
    try{
        const address = await userService.addUserAddress(req.params.id, req.body)

        if(address.address != null){
            return res.status(201).send({
                message: `Endereço adicionado com sucesso.`
            })
        }
        else{
            return res.status(400).send({
                message: `Aconteceu um erro inesperado. Tente novamente!`
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
const removeUserAddress = async (req, res) => {
    try{
        const addressId = req.body.id
        const userId = req.userId
        
        console.log(addressId)

        const address = await userService.removeUserAddress(userId, addressId)

        // Check's if the value was deleted from database
        let found = false
        address.address.map((value, key) => {
            if(value._id == addressId){
                found = true
            }
        })

        if(found == true){
            return res.status(200).send({
                message: `Endereço removido com sucesso.`
            })
        }
        else{
            return res.status(400).send({
                message: `Aconteceu um erro inesperado. Tente novamente!`
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

// Validate required fields function 
const validateRequiredField = (res, label, field) => {
    if(!field){
        return res.status(400).send({
            message: `O campo ${label} precisa é obrigatório.`
        })
    }
}

module.exports = {
    findUserById,
    findAllUsers,
    createUser,
    updateUser,
    removeUser,
    addUserAddress,
    removeUserAddress,
}