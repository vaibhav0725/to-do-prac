const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  completeBy: {
    type: Date,
    validate: {
      validator: function (value) {
        return !value || value > new Date();
      },
      message: "Reminder date must be in the future (use format: YYYY-MM-DD or full ISO date)"
    },
    // Instruction for users
    description: "Enter the reminder date in YYYY-MM-DD format (e.g., 2025-08-20)"
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;