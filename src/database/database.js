const mongoose = require("mongoose")

const connectToDatabase = () => {
    try{
        mongoose.connect(process.env.DATABASE)
        console.log(`Servidor MongoDB conectado.`)
    }
    catch(err){
        console.log(`Não foi possível se conectar ao MongoDB. Erro: ${err}`)
    }
}

module.exports = connectToDatabase