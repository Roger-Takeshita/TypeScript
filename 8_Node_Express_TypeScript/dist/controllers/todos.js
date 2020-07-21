"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const LIST_TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    LIST_TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: LIST_TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const updatedText = req.body.text;
    const todoIndex = LIST_TODOS.findIndex((todo) => todo.id === req.params.id);
    if (todoIndex < 0)
        throw new Error('Could not find todo.');
    LIST_TODOS[todoIndex] = new todo_1.Todo(LIST_TODOS[todoIndex].id, updatedText);
    res.json({
        message: 'Updated Successfully!',
        updatedTodo: LIST_TODOS[todoIndex],
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoIndex = LIST_TODOS.findIndex((todo) => todo.id === req.params.id);
    if (todoIndex < 0)
        throw new Error('Could not find todo.');
    LIST_TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo has been deleted!' });
};
exports.deleteTodo = deleteTodo;
