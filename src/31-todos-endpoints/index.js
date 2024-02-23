import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { todoRouter } from './routes/todoRouter.js';

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/todos', todoRouter);

server.listen(9500, () => {
  console.log('listening on port 9500');
});

// GET /todos/ - получение списка тодо
// POST /todos/ - создание тодошки   { todoId: 1, title: 'новое название' }
// PATCH /todos - изменение задачи
// DELETE /todos - удаление
