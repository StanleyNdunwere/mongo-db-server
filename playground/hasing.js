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
let data ={
    id : 10
};
let token = jwt.sign(data, "123abc");
console.log(token);

let decoded = jwt.verify(token, "123abc");
console.log(decoded);