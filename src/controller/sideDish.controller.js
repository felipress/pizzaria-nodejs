const SideDishService = require("../service/sideDish.service")

const findSideDishById = async (req, res) => {
    try{
        const sideDish = await SideDishService.findSideDishById(req.params.id)
        if(!sideDish){
            return res.status(404).send({
                message: `Nenhum resultado encontrado.`
            })
        }
        return res.status(200).send(sideDish)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllSideDishes = async (req, res) => {
    try{
        const sideDishes = await SideDishService.findAllSideDishes(req.query.limit, req.query.offset)
        if(!sideDishes){
            return res.status(404).send({
                message: `Nenhum resultado encontrado.`
            })
        }
        return res.status(200).send(sideDishes)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createSideDish = async (req, res) => {
    try{
        const sideDish = await SideDishService.createSideDish(req.body)
        return res.status(201).send({
            message: `Item cadastrado com sucesso.`,
            details: sideDish
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateSideDish = async (req, res) => {
    try{
        const sideDish = await SideDishService.updateSideDish(req.params.id, req.body)
        return res.status(200).send({
            message: `Item atualizado com sucesso.`,
            details: sideDish
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateAvailability = async (req, res) => {
    try{
        const {available} = req.body
        const sideDish = await SideDishService.updateAvailability(req.params.id, available)
        return res.status(200).send({
            message: `Item atualizado com sucesso.`,
            details: sideDish
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeSideDish = async (req, res) => {
    try{
        const sideDish = await SideDishService.removeSideDish(req.params.id)
        return res.status(200).send({
            message: `Item removido com sucesso.`,
            details: sideDish
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findSideDishById,
    findAllSideDishes,
    createSideDish,
    updateSideDish,
    updateAvailability,
    removeSideDish
}