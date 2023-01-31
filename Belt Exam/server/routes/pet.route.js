const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.post('/api/pet', PetController.addPet)             //Create
    app.get('/api/pet', PetController.getAllPet)          //Read
    app.get('/api/pet/:id', PetController.getOnePet)       //read one
    app.put('/api/pet/:id', PetController.editPet)        //update One
    app.delete('/api/pet/:id', PetController.adoptPet)    //delete One
}