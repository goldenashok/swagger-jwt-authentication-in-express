let todos = require('../model/todo.json');

const getAllTodo = (req, res) => {
  res.send(todos)
}

const createTodo = (req, res) => {
  const todo = req.body
  todos.push(todo)
  res.status(200).json(todo)
}

const getByIdTodo = (req, res) => {
  const id = parseInt(req.params.id)
  const todo = todos.find((t) => t.id === id)
  if (!todo) {
    res.status(404).json({'message': `cannot find todo id`});
  } else {
    res.status(200).json(todo);
  }
}

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id)
  const todo = todos.find((t) => t.id === id)
  if (!todo) {
    res.status(400).send({'message': 'cannot find todo id'})
  } else {
    const newTodo = req.body
    todos = todos.map((t) => (t.id === id ? newTodo : t))
    res.send(newTodo)
  }
}

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id)
  if(!id) {
    res.status(400).send({'message': 'cannot find todo id'})
  }
  todos = todos.filter((t) => t.id !== id)
  res.status(200).json({'message': 'deleted succesfully'})
}

module.exports = { getAllTodo, createTodo, getByIdTodo, updateTodo, deleteTodo };