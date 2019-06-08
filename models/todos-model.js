const {mongoose} = require('../database/mongoose-config');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let savingNewTodo = async (todoObject) => {
    try {
        let createNewTodo = await new Todo(todoObject);
        let newInsert = await createNewTodo.save();
        let msg = {
            message: "successful",
            body : newInsert
        }
        return msg;
    } catch (e) {
        let error = {
            message: "error",
            error : e
        };
        return error;
    }
};

const getAllTodos = async ()=>{
    try {
        let allTodos = await Todo.find();
        return {allTodos};
    }catch (e){
        return {e}
    }
}


module.exports = {
    Todo,
    savingNewTodo,
    getAllTodos
}
