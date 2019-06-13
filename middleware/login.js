const {Users} = require('../models/user-model');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

let loginHandler = async (req, res, next) => {
    let storedPassword = await Users.findOne({email: req.body.email});
    if (storedPassword) {
        let legalPassword = storedPassword.password;
        let decryptPassword = await bcrypt.compare(req.body.password, legalPassword);
        if(decryptPassword){
            let dbResult = await Users.findOne({
                "email": req.body.email,
                "password": legalPassword
            });
            let token = dbResult.tokens[0].token;
            console.log(token);
            let email = dbResult.email;
            let returnValue = {email, token}
            req.response = returnValue;
            console.log(returnValue);
        }else {
            req.response = { error : "username or password invalid"}
        }
        next();
    } else {
        req.response = {error: 'sorry no such user exists'}
        next();
    }
};

module.exports = {loginHandler}