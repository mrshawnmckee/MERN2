const mongoose = require('mongoose')

const PetSchema = mongoose.Schema({
    petName:{
        type: String,
        required:[true, "Pet name is required"],
        minLength:[3, "The pet's name must be at least 3 characters long"]
    },

    petType:{
        type: String,
        required:[true, "Type of pet is required"],
        minLength:[3, "The pet's type must be at least 3 characters long"]
    },

    petDescription:{
        type: String,
        required:[true, "Pet description is required"],
        minLength:[3, "The description of the pet must be at least 3 characters long"]
    },
    
    skillOne:{
        type: String,
    
    },

    skillTwo:{
        type: String,
    
    },

    skillThree:{
        type: String,
    
    }


}, {timestamps:true})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;