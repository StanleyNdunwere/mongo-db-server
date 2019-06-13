const bcrypt = require('bcryptjs');

let cryptPassword = async(req, res, next)=>{
    let password = req.body.password;
    let salt = await bcrypt.genSalt(10);
    let passwordHashed = await bcrypt.hash(password, salt);
    req.body.password = passwordHashed;
    next();
};
module.exports={
    cryptPassword
}