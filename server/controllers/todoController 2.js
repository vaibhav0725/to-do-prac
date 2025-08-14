// server/controllers/todoController.js

const Todo = require('../models/todo'); // Best practice to match the filename 'Todo.js'

// @desc    Get all todos
// @route   GET /api/todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// @desc    Create a new todo
// @route   POST /api/todos
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: 'Bad Request. Ensure title is provided.', error: err.message });
  }
};

// @desc    Get a single todo by ID
// @route   GET /api/todos/:id
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// @desc    Update a todo by ID
// @route   PUT /api/todos/:id
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // {new: true} returns the updated document
    );

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ message: 'Bad Request', error: err.message });
  }
};

// @desc    Delete a todo by ID
// @route   DELETE /api/todos/:id
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};