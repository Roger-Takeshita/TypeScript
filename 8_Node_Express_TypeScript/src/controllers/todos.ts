import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

//! Fake Database
const LIST_TODOS: Todo[] = [];

const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text; //+ Add type casting
    const newTodo = new Todo(Math.random().toString(), text);

    LIST_TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};

const getTodos: RequestHandler = (req, res, next) => {
    res.json({ todos: LIST_TODOS });
};

const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const updatedText = (req.body as { text: string }).text;
    const todoIndex = LIST_TODOS.findIndex((todo) => todo.id === req.params.id);

    if (todoIndex < 0) throw new Error('Could not find todo.');

    LIST_TODOS[todoIndex] = new Todo(LIST_TODOS[todoIndex].id, updatedText);
    res.json({
        message: 'Updated Successfully!',
        updatedTodo: LIST_TODOS[todoIndex],
    });
};

const deleteTodo: RequestHandler = (req, res, next) => {
    const todoIndex = LIST_TODOS.findIndex((todo) => todo.id === req.params.id);

    if (todoIndex < 0) throw new Error('Could not find todo.');

    LIST_TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo has been deleted!' });
};

export { createTodo, getTodos, updateTodo, deleteTodo };
