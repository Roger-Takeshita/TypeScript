import express from 'express';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.get('/*', (_, res) => {
    res.status(404).json({ message: "Path doesn't exist" });
});

export default app;
