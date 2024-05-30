const express = require('express');
const router = express.Router();
const todo = require('../../controllers/todoController');
require('../../swagger/todoSwaggerConfig');

router.route('/').get(todo.getAllTodo);

router.route('/').post(todo.createTodo);

router.route('/:id').get(todo.getByIdTodo);

router.route('/:id').put(todo.updateTodo);

router.route('/:id').delete(todo.deleteTodo);

module.exports = router;