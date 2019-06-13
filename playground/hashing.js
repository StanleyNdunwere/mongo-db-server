// const {SHA256} = require('crypto-js');
//
// var message = "i am user no 3";
// let hash = SHA256(message).toString();
//
// console.log("message: "+ hash);
//
// let data= {
//     id : 4
// };
//
// let token = {
//     data,
//     hash: SHA256((Json.stringify(data)).toString)
// };
//
// let resultHash = SHA256(JSON.stringify(token.data))
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = "123abc!";
async function bcrypting (){
   let salt = await bcrypt.genSalt(12);
   // console.log(salt);
   let hashedPassword = await bcrypt.hash(password, salt);
   console.log(hashedPassword);
}
bcrypting();

async function comparePassword(password){
    let result = await bcrypt.compare(password,"$2a$12$LtJYiZ8oeL71PjC3lfNc1.GkpIvtWn74K7ngb01heo2L3aEGK2Ibm");
    console.log(result);
}
comparePassword(password);
// let data ={
//     id : 10
// };
// let token = jwt.sign(data, "123abc");
// console.log(token);
//
// let decoded = jwt.verify(token, "123abc");
// console.log(decoded);