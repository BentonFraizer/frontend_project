import { Todos } from '../models/todos.js';
import prepareFieldsToSQLQuery from '../utils.js';

// eslint-disable-next-line import/prefer-default-export
export class TodoController {
  static async getAllTodos(req, res) {
    const allTodos = await Todos.getAllTodos();

    res.status(200).send(allTodos);
  }

  static async createTodo(req, res) {
    const { title, description, completed, tag_id } = req.body;

    if (!tag_id || !title) {
      res.status(400).send({ message: 'Не переданы обязательные поля' });
    }

    try {
      await Todos.createTodo(title, description, completed, tag_id);
    } catch (error) {
      res.status(500).send({ success: false, message: `${error}` });
    }

    res.status(200).send({ success: true, message: 'Задача успешно создана' });
  }

  static async patchTodoById(req, res) {
    const { todoId } = req.params;
    const queryFields = prepareFieldsToSQLQuery(req.body);

    try {
      await Todos.patchTodo(queryFields, todoId);
    } catch (error) {
      res.status(500).send({ success: false, message: `${error}` });
    }

    res.status(200).send({ success: true, message: 'Задача успешно обновлена' });
  }

  static async deleteTodoById(req, res) {
    const { todoId } = req.params;

    try {
      await Todos.deleteTodoById(todoId);
      res.status(200).end();
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}
