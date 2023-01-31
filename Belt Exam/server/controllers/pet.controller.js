const petRoute = require('../routes/pet.route')
const Pet = require('../models/pet.model');

const addPet = (req, res) => {
    Pet.create(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

const getAllPet = (req, res) => {
    Pet.find({})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

const getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

const editPet = (req, res) => {
    Pet.findByIdAndUpdate({_id:req.params.id}, req.body, {
        new:true,
        runValidators:true
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

const adoptPet = (req, res) => {
    Pet.deleteOne({_id:req.params.id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports = {
    addPet, 
    getAllPet,
    getOnePet,
    editPet,
    adoptPet
}