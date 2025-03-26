const Todo = require('./models/todo.js');

const createTodo = async () => {

    const todoData = {
      name: "String",
      age: Number,
    };
    
    const todo = await Todo.create(todoData);
    console.log("New todo:", todo);
  };

const runQueries = async () => {
    console.log('Queries running.');
    await createTodo();
  };

  
  
