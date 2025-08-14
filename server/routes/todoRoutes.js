const express = require('express');
const todoController = require('../controllers/todoController');

console.log(todoController); // This will show you the exported object

const router = express.Router();

// GET /api/todos - Get all todos
router.get('/', todoController.getAllTodos);

// POST /api/todos - Create a new todo
router.post('/', todoController.createTodo);

// GET /api/todos/:id - Get a single todo by ID
router.get('/:id', todoController.getTodoById);

// PUT /api/todos/:id - Update a todo by ID
router.put('/:id', todoController.updateTodo);

// DELETE /api/todos/:id - Delete a todo by ID
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
