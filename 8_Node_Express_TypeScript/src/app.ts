import express, { NextFunction, Request, Response } from 'express';
import logger from 'morgan';
import todoRoutes from './routes/todos';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/todos', todoRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: error.message });
});
app.get('/*', (req, res) => {
    res.status(404).json({ message: "Path doesn't exist" });
});

export default app;
