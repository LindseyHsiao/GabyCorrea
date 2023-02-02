const { Schema, model } = require('mongoose');  //Schema constuctor, model function

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true, 
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true
    }
})

//create the User model using the UsersSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;