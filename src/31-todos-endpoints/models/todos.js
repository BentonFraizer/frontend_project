import { pool } from '../database/index.js';

// eslint-disable-next-line import/prefer-default-export
export class Todos {
  static async getAllTodos() {
    const allTodosDBResponse = await pool.query('select * from todos', []);

    return allTodosDBResponse.rows;
  }

  static async createTodo(title, description, completed, tag_id) {
    try {
      const createTodoResult = await pool.query(
        'insert into todos(title, description, completed, tag_id) values($1, $2, $3, $4)',
        [title, description, completed, tag_id]
      );
      console.log('createTodoResult', createTodoResult);
      if (createTodoResult.rowCount !== 1) {
        console.log('тут?');
        throw new Error();
      }
    } catch (error) {
      throw new Error(`createTodo: ${error}`);
    }
  }

  static async deleteTodoById(id) {
    try {
      const findedTodosDBResponse = await pool.query('select * from todos where id = $1', [id]);
      if (findedTodosDBResponse.rowCount === 0) {
        throw new Error();
      }
      await pool.query('delete from todos where id = $1', [id]);
      return;
    } catch (e) {
      throw new Error('Ошибка удаления');
    }
  }
}
