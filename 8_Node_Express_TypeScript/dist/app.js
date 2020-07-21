"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use('/todos', todos_1.default);
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
app.get('/*', (_, res) => {
    res.status(404).json({ message: "Path doesn't exist" });
});
exports.default = app;
