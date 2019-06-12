const {mongoose} = require('../database/mongoose-config.js');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');


let userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "email isn not a valid email."
        }
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    tokens: [{
        access: {
            type: String,
            required: false
        },
        token: {
            type: String,
            required: false
        }
    }]
});


userSchema.methods.generateAuthToken = async function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, "abc123")
        .toString();
    user.tokens = user.tokens.concat([{
        access,
        token
    }]);
    await user.save();
    let userObject = user.toObject();
    let returnValue = _.pick(userObject, ['_id', 'email']);
    return [returnValue, token];
};

let Users = mongoose.model("Users", userSchema);

let register = async (obj) => {
    let newUserToken
    try {
        let newUser = await new Users(obj);
        await newUser.save(obj);
        newUserToken = newUser.generateAuthToken();
        return newUserToken;
    } catch (e) {
        return e;
    }
}

module.exports = {
    users: Users,
    register
}