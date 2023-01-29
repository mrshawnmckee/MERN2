const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, "First name is required"],
        minLength:[2, 'First name must have at least 2 characters']
    },
    lastName: {
        type: String,
        required:[true, "Last name is required"],
        minLength:[2, "Last name requires at least two characters"]
    },
    birthdate: {
        type: String,
        required:[true, "Birthdate is required"]
    },
    email: {
        type: String,
        required:[true,"Email is required"]
    },
    password: {
        type: String,
        required:[true,"Password is required"],
        minLength:[8, "Password requires at least 8 characters"],
        maxLength:[12, "Password can not be more than 12 characters"]
    }, 
}, {timestamps:true});

mongoose.model('User', UserSchema);