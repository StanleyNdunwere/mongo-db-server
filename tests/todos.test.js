// const expect = require('expect');
// const mocha = require('mocha');
// const rewire = require('rewire');
// const {mongoose} = rewire('../models/todos-model')
// const {Todo} = rewire('../models/todos-model');
//
// Todo.__set__({
//    save : expect.createSpy(),
//    model: expect.createSpy(),
// });
//
// describe('testing todo model', ()=>{
//
//    it("should save successfully if model fits", (done)=>{
//       let obj = {
//          text : "this is a test"
//       };
//       let result  = Todo.savingNewTodo(obj);
//       expect(Todo.savingNewTodo(obj)).toHaveBeenCalled();
//
//       expect(result.message).toBe('successful');
//       done();
//    });
//
// });