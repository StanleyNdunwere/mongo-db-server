const express = require('express');
const parser = require('body-parser');
let {mongoose} = require('mongoose');
let user = require('../models/user-model');
let todos = require('../models/todos-model');

let app = express();

app.use(parser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    let saveStatus = async () => {
        let status = await todos.savingNewTodo({
            text: req.body.text
        });

        if (status.message === "error") {
            res.send({
                error: 'your attempt to save failed',
                body: status.error
            });
        } else if (status.message === "successful") {
            res.send({
                success: "saved successfully",
                body: status.body
            });
        }
    };
    saveStatus();
});


app.get('/todos', (req, res) => {
    let allTodos = async () => {
        let todosList = await todos.getAllTodos();
        res.send({todosList});
    }
    allTodos();
});

app.get('/todos/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});


app.post("/users/register", (req, res) => {
    let signUp = async () => {
        console.log(req.body.email);
        let response = await user.register({
            email: req.body.email,
            password: req.body.password
        });
        await res.header('x-auth', response[1]).send(response[0]);
    };
    signUp();
});

app.listen(process.env.PORT || 3000);


// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
//
// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minLength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });
// let newTodo = new Todo({
//     text: 'Configure nginx server',
//     completed: false,
//     completedAt: 2200
// });
//
// async function saveTodo() {
//     try {
//         let result = await newTodo.save();
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// saveTodo();
//
//
// let oldUsers = mongoose.model('old_users', {
//     name: {
//         type: String,
//         minLength: 1,
//         trim: true
//     },
//     age: {
//         type: Number,
//         default: 0
//     },
//     school: {
//         type: String,
//         required: true,
//         minLength: 1,
//         trim: true
//     },
//     parentName: {
//         type: String,
//         required: true,
//         minLength: 1,
//         trim: true
//     },
//     alive: {
//         type: Boolean,
//         default:true
//     }
// });
//
// let oldUser = new oldUsers(
//     {
//         name: 'Jeremiah Orowa',
//         age: 44,
//         school: 'caritas',
//         parentName: 'Orowa',
//
//         alive: true
//     }
// );
//
// const saveOldUser = async () => {
//     try {
//         let result = await oldUser.save();
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// };
// saveOldUser();
//
//
// let users = new mongoose.model("users",{
//     email : {
//         type: String,
//         trim: true,
//         required:true,
//         minLength: 1,
//     }
// });
//
// let newUser = new users({
//    email : 'mongoosetest@mongoose.com'
// });
//
// let saveToDbUser = async ()=>{
//     try{
//         let result = await newUser.save();
//         console.log(result);
//     }catch(e){
//         console.log(e);
//     }
// };
// saveToDbUser();