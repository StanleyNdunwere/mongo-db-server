const {Users} = require("../models/user-model");

let authenticate = async (req, res, next) => {
    let tokenReceived = req.header("x-auth");
    console.log(tokenReceived);
    let response = await Users.findByToken(tokenReceived);
    console.log(response);
    req.data = response;
    req.token = tokenReceived;
    req.status = response.status;
    next();
};

module.exports = {
    authenticate
};

