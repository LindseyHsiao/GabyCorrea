const { Schema, model } = require('mongoose');  //Schema constuctor, model function

const UserSchema = new Schema({
    userName: {
        type: String
    }, 
    email: {
        type: String
    }
})

//create the User model using the UsersSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;