const {mongoose} = require('../database/mongoose-config');
const {Todo} = require('../models/todos-model');

let find = async()=> {
   let result  = await Todo.find();
   console.log(result);
}
// find();

let findOne = async()=> {
    let result  = await Todo.findOne({
        _id : "5cf80567fb265e2d50cdd114"
    });
    console.log(result);
}
findOne();