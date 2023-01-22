const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/product',  {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected to ProductDB")
}).catch((err)=>{
    console.log("An error occured")
})