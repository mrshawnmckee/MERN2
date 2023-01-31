const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pet', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log('Connected to PetDB')
}).catch((err) => {
    console.log("An error occured", err)
})